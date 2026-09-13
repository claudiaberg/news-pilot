import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { useEffect, useState } from 'react';
import { Image, type LayoutChangeEvent, ScrollView, View } from 'react-native';

import { ArticleView } from '@/components/ArticleView';
import { ConcentrationSlider } from '@/components/ConcentrationSlider';
import { ARTICLES } from '@/lib/articles';
import { useConcentrationStore } from '@/lib/concentration';
import { goBackOrReplace } from '@/lib/navigation';

const STATUS_BAR_STYLE = 'dark' as const;

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = ARTICLES.find((item) => item.id === id);
  const level = useConcentrationStore((state) => state.level);
  const setLevel = useConcentrationStore((state) => state.setLevel);
  const restore = useConcentrationStore((state) => state.restore);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    void restore();
  }, [restore]);

  const handleViewportLayout = (event: LayoutChangeEvent) => {
    setViewportHeight(event.nativeEvent.layout.height);
  };

  if (!article) {
    return (
      <View className="bg-background p-safe flex-1 items-center justify-center px-7">
        <StatusBar style={STATUS_BAR_STYLE} />
        <Typography type="h3" weight="semibold" className="text-foreground mb-3 text-center">
          Article not found
        </Typography>
        <Typography color="muted" className="mb-7 text-center">
          This headline is no longer available.
        </Typography>
        <Button variant="tertiary" onPress={() => goBackOrReplace('/')}>
          <Button.Label>Back to headlines</Button.Label>
        </Button>
      </View>
    );
  }

  return (
    <View className="bg-background flex-1">
      <StatusBar style={STATUS_BAR_STYLE} />
      <View className="pt-safe flex-1">
        <View className="min-h-14 flex-row items-center px-4 py-2">
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
              <Button
                size="sm"
                variant="ghost"
                onPress={() => goBackOrReplace('/')}
                accessibilityLabel="Back to headlines"
              >
                <Button.Label>Back</Button.Label>
              </Button>
              <Image
                source={require('@/assets/news-pilot-logo.png')}
                accessibilityLabel="News Pilot logo"
                resizeMode="contain"
                className="mr-2 ml-2"
                style={{ width: 28, height: 28 }}
              />
              <Typography
                weight="semibold"
                numberOfLines={1}
                className="text-foreground flex-1 text-base tracking-tight"
              >
                News Pilot
              </Typography>
              <Button
                size="sm"
                variant="tertiary"
                onPress={() => setIsFocusMode(true)}
                accessibilityLabel="Enter focus mode"
                accessibilityHint="Hides the app controls and branding"
                className="size-14 rounded-full p-0"
              >
                <Button.Label>Focus</Button.Label>
              </Button>
            </>
          )}
        </View>

        <ScrollView
          onLayout={handleViewportLayout}
          showsVerticalScrollIndicator={false}
          className="flex-1"
        >
          <ArticleView
            article={article}
            level={level}
            minHeight={viewportHeight}
            showDivider={false}
            onMeasure={() => {}}
          />
        </ScrollView>
      </View>
      {!isFocusMode && <ConcentrationSlider level={level} onLevelChange={setLevel} />}
    </View>
  );
}
