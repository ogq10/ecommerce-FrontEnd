import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "orders",
  baseQuery: fetchBaseQuery({ baseUrl: "https://officialecomm.herokuapp.com/api" }),

  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => "orders/",
    }),
    getOrdersById: builder.query({
      query: (id) => `orders/${id}`,
    }),
  }),
});

export const { useGetAllOrdersQuery, useGetOrdersByIdQuery } = ordersApi;
