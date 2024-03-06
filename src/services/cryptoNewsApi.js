
// // //         'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = { 
  'X-RapidAPI-Key': '5f86db027bmsh54f611955633f79p11e2eejsnba43861e7c81',
  // 'X-RapidAPI-Key': 'eb4d8bba3emsh5146385c080682ap1cbffcjsn9e7288bf6de0',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url,newsCategory,count) => ({ 
  url: `${url}/v1/coindesk`,
  headers: cryptoNewsHeaders
 });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(baseUrl,newsCategory,count),
    }),
  }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;