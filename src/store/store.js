import { configureStore } from "@reduxjs/toolkit";
import listingReducer from './features/listing/listingSlice';

const store = configureStore({
    reducer: {
        listing: listingReducer,
    },
});

export default store;