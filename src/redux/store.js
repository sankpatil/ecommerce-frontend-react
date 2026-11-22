import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./features/product/productSlice";
import globalReducer from "./features/global/globalSlice";

import { setupInterceptors } from "../api/axiosConfig";

export const store = configureStore({
    reducer: {
        product: productReducer,
        global: globalReducer,
    },
});

// Register Axios Interceptors after store initialization
setupInterceptors(store);