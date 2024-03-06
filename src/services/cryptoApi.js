import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    // 'X-RapidAPI-Key': 'eb4d8bba3emsh5146385c080682ap1cbffcjsn9e7288bf6de0',
    'X-RapidAPI-Key': '5f86db027bmsh54f611955633f79p11e2eejsnba43861e7c81',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl  = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}), 
    endpoints : (builder) => ({
        getCryptos: builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query : (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getExchanges: builder.query({
            query : () => createRequest(`/exchanges`),
        })
    })
}); 

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,useGetExchangesQuery
} = cryptoApi;



