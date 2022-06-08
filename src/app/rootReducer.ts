import { combineReducers } from '@reduxjs/toolkit';

import { reducer } from '../features/storiesTop/top-stories-slice';

export const rootReducer = combineReducers({
  topstories: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
