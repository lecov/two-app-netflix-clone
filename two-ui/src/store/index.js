import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};


const TwoSlice = createSlice ({
    name: "Two",
    initialState,
    extraReducers: (builder) => {} 
});

export const store = configureStore ({
   reducer: {
    two: TwoSlice.reducer,
   }, 
})