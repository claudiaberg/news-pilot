import * as Haptics from 'expo-haptics';
import { Slider, Typography } from 'heroui-native';
import { Platform, View } from 'react-native';

import {
  clampLevel,
  type ConcentrationLevel,
  LEVEL_META,
  MAX_LEVEL,
  MIN_LEVEL,
} from '@/lib/concentration';

type Props = {
  level: ConcentrationLevel;
  onLevelChange: (level: ConcentrationLevel) => void;
  /** Quiet orientation hint, e.g. "3 of 7". */
  positionLabel: string;
};

export function ConcentrationSlider({ level, onLevelChange, positionLabel }: Props) {
  const handleChange = (value: number | number[]) => {
    const raw = Array.isArray(value) ? (value[0] ?? MIN_LEVEL) : value;
    const next = clampLevel(raw);
    if (next === level) return;
    if (Platform.OS !== 'web') {
      void Haptics.selectionAsync();
    }
    onLevelChange(next);
  };

  return (
    <View className="border-border bg-background pb-safe-offset-6 border-t px-7 pt-5">
      <View className="mb-4 flex-row items-center justify-between">
        <Typography weight="medium" className="text-foreground">
          {LEVEL_META[level].label}
        </Typography>
        <Typography type="body-xs" color="muted">
          {positionLabel}
        </Typography>
      </View>

      <Slider
        value={level}
        minValue={MIN_LEVEL}
        maxValue={MAX_LEVEL}
        step={1}
        onChange={handleChange}
        accessibilityLabel="How well can you concentrate right now"
        accessibilityHint={LEVEL_META[level].hint}
      >
        <Slider.Track className="bg-default h-2 rounded-full">
          <Slider.Fill className="bg-accent rounded-full" />
          <Slider.Thumb
            classNames={{
              thumbContainer: 'size-7 rounded-full bg-accent',
              thumbKnob: 'bg-accent-foreground rounded-full',
            }}
          />
        </Slider.Track>
      </Slider>

      <View className="mt-3 flex-row items-center justify-between">
        <Typography type="body-xs" color="muted">
          Low focus
        </Typography>
        <Typography type="body-xs" color="muted">
          Full focus
        </Typography>
      </View>
    </View>
  );
}
