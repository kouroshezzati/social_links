import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, socialNetworks } from '../../utils/constants';

export interface SocialNetwork {
  id: string;
  name: string;
  url: string;
}

const socialNetworksApi = createApi({
  reducerPath: 'socialNetworks',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['SocialNetwork'],

  endpoints: (builder) => ({
    getSocialNetworks: builder.query<SocialNetwork[], void>({
      query: () => `socialNetworks`,
      providesTags: ['SocialNetwork'],
    }),
    getSocialNetwork: builder.query<SocialNetwork, string>({
      query: (id) => `socialNetworks/${id}`,
      providesTags: ['SocialNetwork'],
    }),
    addSocialNetwork: builder.mutation<void, SocialNetwork>({
      query: (socialNetwork) => ({
        url: 'socialNetwork',
        method: 'POST',
        body: socialNetwork,
      }),
      invalidatesTags: ['SocialNetwork'],
    }),
  }),
});

export const {
  useAddSocialNetworkMutation,
  useGetSocialNetworksQuery,
  useGetSocialNetworkQuery,
} = socialNetworksApi;
export default socialNetworksApi;
