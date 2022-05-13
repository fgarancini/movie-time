import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


import { omdbApi } from "./services/omdbapi";

import favoriteSlice from "./slices/favoriteSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [omdbApi.reducerPath]: omdbApi.reducer,
    favoriteSlice: favoriteSlice,
    searchSlice: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(omdbApi.middleware),
});

setupListeners(store.dispatch);
