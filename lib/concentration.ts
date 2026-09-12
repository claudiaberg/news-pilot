import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

export const CONCENTRATION_LEVELS = [0, 1, 2, 3] as const;

export type ConcentrationLevel = (typeof CONCENTRATION_LEVELS)[number];

export const MIN_LEVEL: ConcentrationLevel = 0;
export const MAX_LEVEL: ConcentrationLevel = 3;

type LevelMeta = {
  /** Shown next to the slider. */
  label: string;
  /** Read out by screen readers, describes what the slider position does. */
  hint: string;
};

export const LEVEL_META: Record<ConcentrationLevel, LevelMeta> = {
  0: { label: 'The gist', hint: 'One sentence per story' },
  1: { label: 'Key points', hint: 'A few short points per story' },
  2: { label: 'Short version', hint: 'One summarised paragraph per story' },
  3: { label: 'Full article', hint: 'The original text, unchanged' },
};

function isConcentrationLevel(value: number): value is ConcentrationLevel {
  return (CONCENTRATION_LEVELS as readonly number[]).includes(value);
}

export function clampLevel(value: number): ConcentrationLevel {
  const rounded = Math.round(value);
  if (rounded <= MIN_LEVEL) return MIN_LEVEL;
  if (rounded >= MAX_LEVEL) return MAX_LEVEL;
  return isConcentrationLevel(rounded) ? rounded : MIN_LEVEL;
}

const STORAGE_KEY = 'news-pilot.concentration-level';

type ConcentrationState = {
  level: ConcentrationLevel;
  setLevel: (level: ConcentrationLevel) => void;
  restore: () => Promise<void>;
};

export const useConcentrationStore = create<ConcentrationState>((set) => ({
  level: 2,
  setLevel: (level) => {
    set({ level });
    void AsyncStorage.setItem(STORAGE_KEY, String(level));
  },
  restore: async () => {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored === null) return;
    const parsed = Number(stored);
    if (!Number.isFinite(parsed)) return;
    set({ level: clampLevel(parsed) });
  },
}));
