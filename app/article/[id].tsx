import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';

import { ArticleView, getVisibleArticleText } from '@/components/ArticleView';
import { ConcentrationSlider } from '@/components/ConcentrationSlider';
import { ARTICLES, type Article } from '@/lib/articles';
import { type ConcentrationLevel, useConcentrationStore } from '@/lib/concentration';
import { goBackOrReplace } from '@/lib/navigation';

const STATUS_BAR_STYLE = 'dark' as const;

type SpeechButtonProps = {
  article: Article;
  level: ConcentrationLevel;
};

function SpeechButton({ article, level }: SpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      void Speech.stop();
    };
  }, []);

  const handleSpeech = async () => {
    if (isSpeaking) {
      await Speech.stop();
      setIsSpeaking(false);
      return;
    }

    const spokenText = [article.headline, ...getVisibleArticleText(article, level)].join('\n\n');
    setIsSpeaking(true);
    Speech.speak(spokenText, {
      language: 'de-DE',
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      onPress={() => void handleSpeech()}
      accessibilityLabel={isSpeaking ? 'Stop reading article' : 'Read article aloud'}
      className="mr-1 rounded-full"
    >
      <Button.Label>{isSpeaking ? 'Stop' : 'Play'}</Button.Label>
    </Button>
  );
}

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const articleIndex = ARTICLES.findIndex((item) => item.id === id);
  const article = articleIndex >= 0 ? ARTICLES[articleIndex] : undefined;
  const nextArticle = articleIndex >= 0 ? ARTICLES[articleIndex + 1] : undefined;
  const level = useConcentrationStore((state) => state.level);
  const setLevel = useConcentrationStore((state) => state.setLevel);
  const restore = useConcentrationStore((state) => state.restore);
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    void restore();
  }, [restore]);

  const handleNextArticle = () => {
    if (!nextArticle) return;
    router.push({ pathname: '/article/[id]', params: { id: nextArticle.id } });
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
              <Image
                source={require('@/assets/news-pilot-logo.png')}
                accessibilityLabel="News Pilot logo"
                resizeMode="contain"
                className="mr-2"
                style={{ width: 28, height: 28 }}
              />
              <Typography
                weight="semibold"
                numberOfLines={1}
                className="text-foreground flex-1 text-base tracking-tight"
              >
                News Pilot
              </Typography>
              <SpeechButton key={`${article.id}-${level}`} article={article} level={level} />
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

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <ArticleView
            article={article}
            level={level}
            minHeight={0}
            showDivider={false}
            onMeasure={() => {}}
          />
          {!isFocusMode && (
            <View className="px-7 pb-10">
              <View className="border-border flex-row items-center justify-between border-t pt-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onPress={() => goBackOrReplace('/')}
                  accessibilityLabel="Back to news"
                >
                  <Button.Label>Back</Button.Label>
                </Button>
                {nextArticle && (
                  <Button
                    size="sm"
                    variant="tertiary"
                    onPress={handleNextArticle}
                    accessibilityLabel={`Next article: ${nextArticle.headline}`}
                  >
                    <Button.Label>Next article</Button.Label>
                  </Button>
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      {!isFocusMode && <ConcentrationSlider level={level} onLevelChange={setLevel} />}
    </View>
  );
}
