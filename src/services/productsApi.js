import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");

    headers.set("Content-Type", "application/json");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params: params || {},
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ id }) => (
                  { type: "Product", id },
                  { type: "Product", id: "LIST" }
                ),
              ),
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});


export const {useGetProductsQuery,useGetProductByIdQuery}=productsApi