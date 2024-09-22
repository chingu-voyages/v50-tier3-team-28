import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useAuth0 } from '@auth0/auth0-react';

// const apiUrl = 'http://localhost:3003/api';
// const apiUrl = 'https://be-v50-tier3-team-28.onrender.com/api';
// TEST with dummyjson - is working, but not the above links, due to using token logic needs to be fixed
const apiUrl = 'https://dummyjson.com';

console.log("apiURL: ", apiUrl);

// TODO: Following line nr-12 to 31 should be fixed to get our data from BE using Token
// const useBaseQueryWithAuth = async (args, api, extraOptions) => {
//   const { getAccessTokenSilently } = useAuth0();

//   // Get Auth0 token
//   const token = await getAccessTokenSilently();
//   console.log("token: ", token);

//   // Pass token into the request headers
//   const modifiedArgs = {
//     ...args,
//     headers: {
//       ...args.headers,
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   // Use fetchBaseQuery with modified arguments
//   const baseQuery = fetchBaseQuery({ baseUrl: apiUrl });
//   return baseQuery(modifiedArgs, api, extraOptions);
// };

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  // baseQuery: useBaseQueryWithAuth,
  baseQuery: fetchBaseQuery({
    // WORKING with dummyjson baseurl
    baseUrl: apiUrl
  }),
  endpoints: (builder) => ({
    // Define your endpoints here
    getUserData: builder.query({
      // query: () => '/dashboard',
      // WORKING with dummyjson baseurl - /products
      query: () => '/products',
    }),
  }),
});

export const { useGetUserDataQuery } = apiSlice;
