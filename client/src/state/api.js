import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "PendingRecruits",
    "RejectedRecruits",
    "ContactedRecruits",
    "Dashboard",
  ],

  endpoints: (build) => ({
    getPendingRecruits: build.query({
      query: () => "general/pendingRecruits",
      providesTags: ["PendingRecruits"],
    }),
    getRejectedRecruits: build.query({
      query: () => "general/rejectedRecruits",
      providesTags: ["RejectedRecruits"],
    }),
    getContactedRecruits: build.query({
      query: () => "general/contactedRecruits",
      providesTags: ["ContactedRecruits"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    updateRejectUser: build.mutation({
      query: (userData) => ({
        url: `general/rejectRecruits`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["PendingRecruits"],
    }),
    updateContactUser: build.mutation({
      query: (userData) => ({
        url: `general/contactedRecruits`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["PendingRecruits"],
    }),
  }),
});

export const {
  useGetContactedRecruitsQuery,
  useGetRejectedRecruitsQuery,
  useGetPendingRecruitsQuery,
  useGetDashboardQuery,
  useUpdateRejectUserMutation,
  useUpdateContactUserMutation,
} = api;
