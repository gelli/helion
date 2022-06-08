import * as React from 'react';
import { useDispatch } from 'react-redux';

import { getTopStoriesStart } from '../top-stories-slice';

interface LoadTopStoriesProps {}

export const LoadTopStories: React.FC = (props: LoadTopStoriesProps) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTopStoriesStart());
  }, [dispatch]);

  return null;
};
