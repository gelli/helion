import * as React from 'react';

import { View } from '../../../layout/components/View';
import { LoadTopStories } from './LoadTopStories';
import { TopStoryList } from './TopStoryList';

export const TopStories: React.FC = () => {
  return (
    <View>
      <LoadTopStories />
      <TopStoryList />
    </View>
  );
};
