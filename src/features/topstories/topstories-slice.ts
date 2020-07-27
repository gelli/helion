import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Story } from './Story';

interface TopStoriesState {
  stories: Array<Story>;
  error: string | null;
  isLoading: boolean;
}

function startLoading(state: TopStoriesState) {
  state.isLoading = true;
}

const initialState: TopStoriesState = {
  stories: [],
  error: null,
  isLoading: false,
};

const topStoriesSlice = createSlice({
  name: "topstories",
  initialState,
  reducers: {
    getTopStoriesStart: startLoading,
    getTopStoriesSuccess(state, action: PayloadAction<Story[]>) {
      state.stories = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getTopStoriesFailed(state, action: PayloadAction<string>) {
      state.stories = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getTopStoriesStart,
  getTopStoriesSuccess,
  getTopStoriesFailed,
} = topStoriesSlice.actions;

export const reducer = topStoriesSlice.reducer;
