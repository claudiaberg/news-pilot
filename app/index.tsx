import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { ListGroup, Separator, Typography } from 'heroui-native';
import { Image, ScrollView, View } from 'react-native';

import { ARTICLES } from '@/lib/articles';

const STATUS_BAR_STYLE = 'dark' as const;
const PAGE_HORIZONTAL_PADDING = 28;

export default function HomeScreen() {
  return (
    <View className="bg-background flex-1">
      <StatusBar style={STATUS_BAR_STYLE} />
      <View className="pt-safe flex-1">
        <View
          className="min-h-14 flex-row items-center py-2"
          style={{ paddingHorizontal: PAGE_HORIZONTAL_PADDING }}
        >
          <View
            accessible
            accessibilityRole="image"
            accessibilityLabel="News Pilot logo"
            className="h-8 overflow-hidden"
            style={{ width: 136 }}
          >
            <Image
              source={require('@/assets/news-pilot-wordmark.png')}
              resizeMode="stretch"
              style={{
                width: 144,
                height: 72,
                transform: [{ translateX: -7 }, { translateY: -2 }],
              }}
            />
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pt-8 pb-safe-offset-8"
          contentContainerStyle={{ paddingHorizontal: PAGE_HORIZONTAL_PADDING }}
        >
          <Typography type="h2" weight="semibold" className="text-foreground mb-8">
            News
          </Typography>

          <ListGroup className="bg-background border-0">
            {ARTICLES.map((article, index) => (
              <View key={article.id}>
                {index > 0 && <Separator />}
                <ListGroup.Item
                  onPress={() =>
                    router.push({ pathname: '/article/[id]', params: { id: article.id } })
                  }
                  accessibilityLabel={`${article.section}: ${article.headline}`}
                  accessibilityHint="Opens the article"
                  className="py-6"
                  style={{ paddingHorizontal: 0 }}
                >
                  <ListGroup.ItemContent className="gap-2">
                    <ListGroup.ItemDescription className="text-muted text-xs tracking-[2px] uppercase">
                      {article.section}
                    </ListGroup.ItemDescription>
                    <ListGroup.ItemTitle className="text-foreground text-xl leading-7">
                      {article.headline}
                    </ListGroup.ItemTitle>
                  </ListGroup.ItemContent>
                  <ListGroup.ItemSuffix />
                </ListGroup.Item>
              </View>
            ))}
          </ListGroup>
        </ScrollView>
      </View>
    </View>
  );
}
