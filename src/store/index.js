import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './search-slice';
import teamSlice from './team-slice';

const store = configureStore({
  reducer: { ui: searchSlice.reducer , team:teamSlice.reducer},
});

export default store;