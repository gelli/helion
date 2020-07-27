import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { topStoriesEpic } from '../features/topstories/epics';
import { epicMiddleware } from './middleware';
import { rootReducer } from './rootReducer';

// see https://github.com/redux-observable/redux-observable/issues/706
export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false, // or true if you want to use thunks
    }),
    epicMiddleware,
  ],
});

epicMiddleware.run(topStoriesEpic);
