import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { useSelector } from 'react-redux';

const baseQuery= fetchBaseQuery({
    baseUrl: "http://localhost:3003/api/",
    prepareHeaders:  (headers, { getState }) => {
        const token =  getState().auth.token;
 // Assuming token is stored in auth.token state
        
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },        
})

export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery,
    endpoints: (builder) => ({

        // User Profile queries

        getUserProfile: builder.query({
            query: () => "dashboard",
        }),
        updateUserProfile: builder.mutation({
            query: (body) => ({
                url: "user/metadata",
                method: "PATCH",
                body,
            }),
        }),
        deleteUserProfile: builder.mutation({
            query: () => ({
                url: "user",
                method: "DELETE",
            }),
        }),

        // Requests queries

        getAllRequests: builder.query({
            query: () => "requests",
        }),
        createRequest: builder.mutation({
            query: (body) => ({
                url: "requests",
                method: "POST",
                body,
            }),
        }),
        updateRequest: builder.mutation({
            query: (body) => ({
                url: "requests",
                method: "PUT",
                body,
            }), 
        }),
        deleteRequest: builder.mutation({
            query: (id) => ({
                url: `requests/${id}`,
                method: "DELETE",
            }),
        }),
        acceptRequest: builder.mutation({
            query: (id) => ({
                url: `requests/${id}/accept`,
                method: "POST",
            }),
        }),
        completeRequest: builder.mutation({
            query: (id) => ({
                url: `requests/${id}/complete`,
                method: "POST",
            }),
        }),
        cancelRequest: builder.mutation({
            query: (id) => ({
                url: `requests/${id}/cancel`,
                method: "POST",
            }),
        }),
        
    }),
})

export const {
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
    useDeleteUserProfileMutation,
    useGetAllRequestsQuery,
    useCreateRequestMutation,
    useUpdateRequestMutation,
    useDeleteRequestMutation,
    useAcceptRequestMutation,
    useCompleteRequestMutation,
    useCancelRequestMutation,
} = dashboardApi