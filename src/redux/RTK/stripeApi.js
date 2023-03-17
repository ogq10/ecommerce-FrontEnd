import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stripeApi = createApi({
  reducerPath: "stripe",
  baseQuery: fetchBaseQuery({ baseUrl: "https://officialecomm.herokuapp.com/api" }),

  endpoints: (builder) => ({
    getPIbyID: builder.query({
      query: (pid) => `stripe/payment_methods/${pid}`,
    }),
  }),
});

export const { useGetPIbyIDQuery } = stripeApi;
