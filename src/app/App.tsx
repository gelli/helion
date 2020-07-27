import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { TopStories } from '../features/topstories/components/TopStories';
import { Container } from '../layout/components/Container';

const routing = (
  <BrowserRouter>
    <Route path="/" component={TopStories} exact />
  </BrowserRouter>
);

const App: React.FC = () => {
  return <Container>{routing}</Container>;
};

export default App;
