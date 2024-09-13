import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "dashboard",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com"
  }),
  endpoints: (builder) => ({
    // Get all endpoints

    // Reading product (from https://dummyjson.com)
    getProduct: builder.query({
      query: () => "/products",
    }),

    // test dummydata (from https://dummyjson.com) endpoint using id
    getProductById: builder.query({
      query: (id) => `/products/${id}`
    }),

    // Add new product - mutating
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: newProduct
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = dashboardApi;
