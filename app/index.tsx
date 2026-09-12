import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
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

export default function ReaderScreen() {
  const level = useConcentrationStore((state) => state.level);
  const setLevel = useConcentrationStore((state) => state.setLevel);
  const restore = useConcentrationStore((state) => state.restore);

  const scrollRef = useRef<ScrollView>(null);
  const offsetsRef = useRef<number[]>([]);
  const indexRef = useRef(0);
  const levelRef = useRef(level);

  const [viewport, setViewport] = useState(0);
  const [heights, setHeights] = useState<number[]>(() => ARTICLES.map(() => 0));
  const [index, setIndex] = useState(0);

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

  // Keep the reader on the same story when the summarisation level changes.
  useEffect(() => {
    if (levelRef.current === level) return undefined;
    levelRef.current = level;
    const target = indexRef.current;
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({ y: offsetsRef.current[target] ?? 0, animated: false });
    }, 60);
    return () => clearTimeout(timer);
  }, [level]);

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
    setIndex(nextIndex);
  }, []);

  return (
    <View className="bg-background flex-1">
      <StatusBar style="dark" />
      <View className="pt-safe flex-1">
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
      <ConcentrationSlider
        level={level}
        onLevelChange={setLevel}
        positionLabel={`${index + 1} of ${ARTICLES.length}`}
      />
    </View>
  );
}
