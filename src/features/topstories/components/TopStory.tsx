import { faSafari } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

import { Story } from '../Story';

interface TopStoryProps {
  story: Story;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  margin-bottom: 0.5rem;
`;

const Section = styled.div`
  padding: 0.5rem 2rem;
  width: 42rem;
  align-items: left;
`;

const Headline = styled.h2`
  color: #d0d1d6;
  display: block;
  font-size: 1.2rem;
  font-weight: normal;
`;

const LinkBox = styled.div`
  display: flex;
  min-width: 0;
  justify-content: flex-start;
  /*flex-direction: row; */
  justify-items: baseline;
  background-color: #0c0c0c;
  border: 1px solid #323740;
  border-radius: 5px;
  padding: 0.5rem;
`;

const NavBracket = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 1.2rem;
  align-items: center;
`;

const Url = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  min-width: 0;
`;

const NoOverflow = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TopStory: React.FC<TopStoryProps> = ({ story }) => {
  return (
    <Container>
      <Section>
        <Headline>{story.title}</Headline>
        {story.url && (
          <LinkBox>
            <FontAwesomeIcon size={"2x"} icon={faSafari} />
            <Url>
              <NoOverflow>{story.url}</NoOverflow>
            </Url>
            <NavBracket>
              <FontAwesomeIcon size={"1x"} icon={faChevronRight} />
            </NavBracket>
          </LinkBox>
        )}
        <p>endlesssky</p>
      </Section>
    </Container>
  );
};
