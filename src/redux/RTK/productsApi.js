import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://makadsaapi.onrender.com/api" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getProductByCategory: builder.query({
      query: (drop) => `products/?drop=${drop}`,
    }),
    getProductByFilter: builder.query({
      query: (filter) => `products/?filter=${filter}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useGetProductByFilterQuery,
} = productsApi;
