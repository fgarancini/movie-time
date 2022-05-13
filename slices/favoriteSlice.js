import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state, action) => {
      return { ...state, favorites: [...action.payload] };
    },
    newFavorite: (state, action) => {
      return { ...state, favorites: [action.payload, ...state.favorites] };
    },
    deleteFavorite: (state, action) => {
      const favorites = state.favorites.filter(
        (favorite) => favorite.imdbID !== action.payload.imdbID
      );
      return { ...state, favorites: [...favorites] };
    },
  },
});

export const { newFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;