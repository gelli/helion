import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LoadTopStories } from '../features/storiesTop/components/load-top-stories';
import { TopStoriesPage } from '../features/storiesTop/components/top-stories-page';
import { StoryDetail } from '../features/storyDetail/components/StoryDetail';
import { Container } from '../layout/components/Container';

const routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={TopStoriesPage} exact />
      <Route path="/story/:id" component={StoryDetail} />
    </Switch>
  </BrowserRouter>
);

const App: React.FC = () => {
  return (
    <Container>
      <LoadTopStories />
      {routing}
    </Container>
  );
};

export default App;
