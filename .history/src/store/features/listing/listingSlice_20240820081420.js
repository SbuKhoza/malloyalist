import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const updateListing = createAsyncThunk('listing/updateListing', async (updatedListing) => {
    const { id, ...data } = updatedListing;
    const response = await axios.put(`http://localhost:5000/listings/${id}`, data);
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
            })
            .addCase(updateListing.fulfilled, (state, action) => {
                const index = state.findIndex(listing => listing.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export default listingSlice.reducer;