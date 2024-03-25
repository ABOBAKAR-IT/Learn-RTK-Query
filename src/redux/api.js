import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
    newPost:builder.mutation({
        query:(post)=>({
            url:"posts",
            method:"POST",
            body:post,
        })
    })
  }),
});
export const { useGetPostsQuery,useNewPostMutation } = myAPI;
