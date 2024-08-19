import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchListings = createAsyncThunk('listing/fetchListings', async () => {
    const response = await axios.get('http://localhost:5000/listings');
    return response.data;
});

export const addListing = createAsyncThunk('listing/addListing', async (newListing) => {
    const response = await axios.post('http://localhost:5000/listings', newListing);
    return response.data;
});

export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addListing.fulfilled, (state, action) => {
                state.push(action.payload);
            });
    }
});

export default listingSlice.reducer;
