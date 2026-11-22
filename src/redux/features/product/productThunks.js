
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axiosConfig";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const { data } = await api.get("/public/categories/products");

            return data.content;
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                "Failed to fetch products";

            return rejectWithValue(message);
        }
    }
);

export const searchProducts = createAsyncThunk(
    "product/searchProducts",
    async (keyword, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const { data } = await api.get(
                "/public/products/search",
                {
                    params: { keyword }
                }
            );

            return data.content;
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                "Failed to search products";

            return rejectWithValue(message);
        }
    }
);
