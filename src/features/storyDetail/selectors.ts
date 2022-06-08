import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import { Story } from '../storiesTop/story';

export function useStoryDetail(id: number): Story | undefined {
  const { stories } = useSelector((state: RootState) => state.topstories);

  return stories.filter((storyItem) => storyItem.id === id)?.[0];
}
