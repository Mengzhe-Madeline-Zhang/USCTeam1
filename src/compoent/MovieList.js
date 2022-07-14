import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import NextBnt from "./NextBnt";
import Pagination from "./Pagination";
import { getAllMovies } from "./Slice";
import movieApi from "../apis/movieApi";
import { addMovies } from "./Slice";
import { APIkey } from "../apis/movieApiKey";
import { useDispatch, useSelector } from 'react-redux';

const Page = ({page}) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.movies.movies.page);
    const data1 = useSelector((state) => console.log(state.movies));
    
    const allmovie = getAllMovies;
    console.log("data", data,data !== page, "all move", allmovie);
    useEffect(() => {
            if(data !== page) {
            const fetchMovies = async () => {
                const response = await movieApi.get(`popular?api_key=${APIkey}&language=en-US&page=${page}`)
                    .catch((err) => {
                        console.log("err: ", err);
                    });
                // console.log("the repsonse ", response);
                dispatch(addMovies(response.data));
            };
            fetchMovies();
        }
        
    });
}

const MovieList = () => {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        console.log("next",page);
        setPage(page + 1);
    }
    const prevPage = () => {
        console.log("preve",page)
         setPage(page-1);
    }


    const movies = useSelector(getAllMovies);
    // console.log(movies,movies.results);
    let renderMovies = "";
    renderMovies =
        movies.results ? (
            movies.results.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <div>Error message</div>
        )

    return <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
        <Page page={page}/>
        {renderMovies}
    </div>

}

export default MovieList;