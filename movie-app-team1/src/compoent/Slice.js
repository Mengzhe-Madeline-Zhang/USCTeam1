import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {}
}

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