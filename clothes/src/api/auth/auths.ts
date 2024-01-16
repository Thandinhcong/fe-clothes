import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "Auth",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost",
    prepareHeaders: (headers) => {},
  }),
  endpoints: (builder) => ({}),
});
