import axios from "axios";

import {
    startLoading,
    stopLoading,
    setGlobalError,
    clearGlobalError,
} from "../redux/features/global/globalSlice";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

// Setup Interceptors
export const setupInterceptors = (store) => {

    // Request Interceptor
    api.interceptors.request.use(
        (config) => {
            store.dispatch(clearGlobalError());
            store.dispatch(startLoading());

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response Interceptor
    api.interceptors.response.use(
        (response) => {
            store.dispatch(stopLoading());

            return response;
        },
        (error) => {
            store.dispatch(stopLoading());

            const message =
                error.response?.data?.message ||
                "Something went wrong. Please try again.";

            store.dispatch(setGlobalError(message));

            return Promise.reject(error);
        }
    );
};

export default api;