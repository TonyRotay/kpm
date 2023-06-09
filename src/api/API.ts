import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const getUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return '/api/';
  } else if (process.env.NODE_ENV === 'production') {
    return '/api/';
  }
};
export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({ baseUrl: getUrl() }),
  tagTypes: [],

  endpoints: (build) => ({}),
});
