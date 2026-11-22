
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, searchProducts } from "./productThunks";
console.log("CURRENT PRODUCT SLICE LOADED");
const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            // Fetch products started
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // Fetch products successful
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })

            // Fetch products failed
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })

            // Search started
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // Search successful
            .addCase(searchProducts.fulfilled, (state, action) => {
                console.log("SEARCH REDUCER EXECUTED");
                console.log("Search Payload:", action.payload);

                state.loading = false;
                state.products = action.payload;
            })

            // Search failed
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});

export default productSlice.reducer;
