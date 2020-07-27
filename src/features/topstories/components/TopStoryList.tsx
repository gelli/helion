import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../app/rootReducer';
import { TopStory } from './TopStory';

export const TopStoryList: React.FC = () => {
  const { isLoading, stories } = useSelector(
    (state: RootState) => state.topstories
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {stories.map((story) => (
        <TopStory key={story.id} story={story} />
      ))}
    </>
  );
};
