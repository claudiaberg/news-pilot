import { Typography } from 'heroui-native';
import { type LayoutChangeEvent, View } from 'react-native';
import { FadeIn } from 'react-native-reanimated';

import { AnimatedView } from '@/components/ui/primitives/AnimatedView';
import type { Article } from '@/lib/articles';
import type { ConcentrationLevel } from '@/lib/concentration';
import { cn } from '@/lib/utils';

const WORDS_PER_MINUTE = 200;

export function getVisibleArticleText(article: Article, level: ConcentrationLevel): string[] {
  switch (level) {
    case 0:
      return [article.gist];
    case 1:
      return article.keyPoints;
    case 2:
      return [article.short];
    case 3:
      return article.full;
    default:
      return [article.short];
  }
}

function countWords(parts: string[]): number {
  return parts.reduce((total, part) => total + part.trim().split(/\s+/u).filter(Boolean).length, 0);
}

function readingLabel(words: number): string {
  if (words < 45) return 'a few seconds';
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min`;
}

type Props = {
  article: Article;
  level: ConcentrationLevel;
  /** Keeps every story filling at least one screen. */
  minHeight: number;
  showDivider: boolean;
  onMeasure: (height: number) => void;
};

export function ArticleView({ article, level, minHeight, showDivider, onMeasure }: Props) {
  const parts = getVisibleArticleText(article, level);

  const handleLayout = (event: LayoutChangeEvent) => {
    onMeasure(event.nativeEvent.layout.height);
  };

  return (
    <View
      onLayout={handleLayout}
      style={minHeight > 0 ? { minHeight } : undefined}
      className={cn('px-7 pt-10 pb-6', showDivider && 'border-border border-t')}
    >
      <View className="mb-5 flex-row items-center justify-between">
        <Typography type="body-xs" color="muted" className="tracking-[2px] uppercase">
          {article.section}
        </Typography>
        <Typography type="body-xs" color="muted">
          {readingLabel(countWords(parts))}
        </Typography>
      </View>

      <Typography
        type="h3"
        weight="semibold"
        className="text-foreground mb-7 text-[27px] leading-[35px]"
      >
        {article.headline}
      </Typography>

      <AnimatedView key={level} entering={FadeIn.duration(240)} className="gap-4">
        {level === 1
          ? parts.map((point) => (
              <View key={point} className="flex-row gap-3">
                <Typography className="text-muted text-lg leading-8">{'\u2013'}</Typography>
                <Typography className="text-foreground flex-1 text-lg leading-8">
                  {point}
                </Typography>
              </View>
            ))
          : parts.map((paragraph) => (
              <Typography
                key={paragraph}
                className={cn(
                  'text-foreground',
                  level === 0 && 'text-[21px] leading-9',
                  level === 2 && 'text-lg leading-8',
                  level === 3 && 'text-[17px] leading-8',
                )}
              >
                {paragraph}
              </Typography>
            ))}
      </AnimatedView>
    </View>
  );
}
