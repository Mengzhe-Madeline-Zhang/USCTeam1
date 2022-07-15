import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../compoent/Slice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

