import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `http://www.omdbapi.com`;

const createRequest = (url) => ({ url });

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ title, page }) =>
        createRequest(
          `?apikey=d2b7c5c6&s=${title}&type=movie&page=${page}`
        ),
    }),
    getFullPlot: builder.query({
      query: ({imdbID}) =>
        createRequest(`?apikey=d2b7c5c6&i=${imdbID}&plot=full`),
    }),
  }),
});

export const { useGetMoviesQuery, useGetFullPlotQuery } = omdbApi;
