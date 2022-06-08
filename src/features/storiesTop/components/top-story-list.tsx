import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../../app/rootReducer';
import { TopStory } from './top-story';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TopStoryList: React.FC = () => {
  const { isLoading, stories } = useSelector(
    (state: RootState) => state.topstories
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <Wrapper>
      {stories.map((story) => (
        <li>
          <TopStory key={story.id} story={story} />
        </li>
      ))}
    </Wrapper>
  );
};
