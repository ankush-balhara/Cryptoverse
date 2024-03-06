import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoDetailsApi } from "../services/cryptoApi";


export default configureStore({
    reducer:{
        [cryptoApi.reducerPath ]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath ]: cryptoNewsApi.reducer,
        // [cryptoDetailsApi.reducerPath ]: cryptoDetailsApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware),
})