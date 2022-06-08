import { faSafari } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { Story } from '../story';

interface TopStoryProps {
  story: Story;
}

/*   color: #d0d1d6; */
const Headline = styled.h2`
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
  color: #007aff;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  min-width: 0;
  cursor: pointer;
`;

const NoOverflow = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  padding: 0.5rem 2rem 1rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

/* color: #94969d;*/
const Link = styled(RouterLink)`
  color: inherit;

  &:link {
    color: inherit;

    h2 {
      color: rgba(255, 255, 255, 0.87);
    }
  }
  &:visited {
    color: inherit;
  }
`;

export const TopStory = ({ story }: TopStoryProps) => {
  const handleUrlClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    window.open(story.url, "_blank");
  };

  return (
    <Link to={`/story/${story.id}`}>
      <Wrapper>
        <Headline>{story.title}</Headline>
        {story.url && (
          <LinkBox onClick={handleUrlClick}>
            <FontAwesomeIcon size={"2x"} icon={faSafari} />
            <Url>
              <NoOverflow>{story.url}</NoOverflow>
            </Url>
            <NavBracket>
              <FontAwesomeIcon size={"1x"} icon={faChevronRight} />
            </NavBracket>
          </LinkBox>
        )}
      </Wrapper>
    </Link>
  );
};
