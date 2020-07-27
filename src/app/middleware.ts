import { AnyAction } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import { RootState } from './rootReducer';

export const epicMiddleware = createEpicMiddleware<
  AnyAction,
  AnyAction,
  RootState
>();
