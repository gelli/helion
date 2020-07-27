import { combineReducers } from '@reduxjs/toolkit';

import { reducer } from '../features/topstories/topstories-slice';

export const rootReducer = combineReducers({
  topstories: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
