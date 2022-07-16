import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: []
}
///createslice
// A function that accepts an initial state, an object of reducer functions, 
// and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const Slice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
})

export const { addMovies } = Slice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default Slice.reducer;