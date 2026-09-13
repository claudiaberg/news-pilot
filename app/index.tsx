import { StatusBar } from 'expo-status-bar';
import { Button, Typography } from 'heroui-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Image,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';

import { ArticleView } from '@/components/ArticleView';
import { ConcentrationSlider } from '@/components/ConcentrationSlider';
import { ARTICLES } from '@/lib/articles';
import { useConcentrationStore } from '@/lib/concentration';

const STATUS_BAR_STYLE = 'dark' as const;

export default function ReaderScreen() {
  const level = useConcentrationStore((state) => state.level);
  const setLevel = useConcentrationStore((state) => state.setLevel);
  const restore = useConcentrationStore((state) => state.restore);

  const scrollRef = useRef<ScrollView>(null);
  const offsetsRef = useRef<number[]>([]);
  const indexRef = useRef(0);
  const levelRef = useRef(level);
  const focusModeRef = useRef(false);

  const [viewport, setViewport] = useState(0);
  const [heights, setHeights] = useState<number[]>(() => ARTICLES.map(() => 0));
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    void restore();
  }, [restore]);

  const offsets = useMemo(() => {
    const result: number[] = [];
    heights.reduce((offset, height) => {
      result.push(offset);
      return offset + height;
    }, 0);
    return result;
  }, [heights]);

  useEffect(() => {
    offsetsRef.current = offsets;
  }, [offsets]);

  const measured = viewport > 0 && heights.every((height) => height > 0);
  // Snap one story per screen while every story fits. Full articles are longer
  // than the screen, so they scroll freely instead of snapping back.
  const snapsToStories = measured && heights.every((height) => height <= viewport + 1);

  // Keep the reader on the same story when the text level or reading layout changes.
  useEffect(() => {
    if (levelRef.current === level && focusModeRef.current === isFocusMode) return undefined;
    levelRef.current = level;
    focusModeRef.current = isFocusMode;
    const target = indexRef.current;
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({ y: offsetsRef.current[target] ?? 0, animated: false });
    }, 60);
    return () => clearTimeout(timer);
  }, [isFocusMode, level]);

  const handleViewportLayout = useCallback((event: LayoutChangeEvent) => {
    setViewport(event.nativeEvent.layout.height);
  }, []);

  const handleMeasure = useCallback((position: number, height: number) => {
    setHeights((current) => {
      if (Math.abs((current[position] ?? 0) - height) < 1) return current;
      const next = [...current];
      next[position] = height;
      return next;
    });
  }, []);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    const positions = offsetsRef.current;
    let nextIndex = 0;
    for (let i = 0; i < positions.length; i += 1) {
      if (y >= (positions[i] ?? 0) - 24) nextIndex = i;
    }
    if (nextIndex === indexRef.current) return;
    indexRef.current = nextIndex;
  }, []);

  return (
    <View className="bg-background flex-1">
      <StatusBar style={STATUS_BAR_STYLE} />
      <View className="pt-safe flex-1">
        <View className="min-h-14 flex-row items-center px-7 py-2">
          {isFocusMode ? (
            <Button
              size="sm"
              variant="ghost"
              onPress={() => setIsFocusMode(false)}
              accessibilityLabel="Exit focus mode"
              className="ml-auto"
            >
              <Button.Label>Exit focus</Button.Label>
            </Button>
          ) : (
            <>
              <Image
                source={require('@/assets/news-pilot-logo.png')}
                accessibilityLabel="News Pilot logo"
                resizeMode="contain"
                className="mr-3"
                style={{ width: 32, height: 32 }}
              />
              <Typography weight="semibold" className="text-foreground text-lg tracking-tight">
                News Pilot
              </Typography>
              <Button
                size="sm"
                variant="tertiary"
                onPress={() => setIsFocusMode(true)}
                accessibilityLabel="Enter focus mode"
                accessibilityHint="Hides the app controls and branding"
                className="ml-auto size-14 rounded-full p-0"
              >
                <Button.Label>Focus</Button.Label>
              </Button>
            </>
          )}
        </View>

        <ScrollView
          ref={scrollRef}
          onLayout={handleViewportLayout}
          onScroll={handleScroll}
          scrollEventThrottle={32}
          showsVerticalScrollIndicator={false}
          decelerationRate={snapsToStories ? 'fast' : 'normal'}
          snapToOffsets={snapsToStories ? offsets : undefined}
          snapToStart={false}
          snapToEnd={false}
        >
          {ARTICLES.map((article, position) => (
            <ArticleView
              key={article.id}
              article={article}
              level={level}
              minHeight={viewport}
              showDivider={position > 0}
              onMeasure={(height) => handleMeasure(position, height)}
            />
          ))}
        </ScrollView>
      </View>
      {!isFocusMode && <ConcentrationSlider level={level} onLevelChange={setLevel} />}
    </View>
  );
}
