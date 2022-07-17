import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { getAllMovies } from "./Slice";
import movieApi from "../apis/movieApi";
import { addMovies } from "./Slice";
import { APIkey } from "../apis/movieApiKey";
import { useDispatch, useSelector } from 'react-redux';

import "./MovieList.css";

const MovieCard = React.lazy(() => import("./MovieCard"));


const GetMovieData = ({page}) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.movies.movies.page);
    
    // const allmovie = getAllMovies;
    useEffect(() => {
            if(data !== page) {
            const fetchMovies = async () => {
                const response = await movieApi.get(`popular?api_key=${APIkey}&language=en-US&page=${page}`)
                    .catch((err) => {
                        console.log("err: ", err);
                    });

                    // console.log("response", response.data);
                    dispatch(addMovies(response.data));
            };
            fetchMovies();
        }
        
    });
}

const MovieList = () => {
    const [page, setPage] = useState(1);
    const [likedList, setLikedList] = useState([
    ]);

    const [blockedList, setBlockedList] = useState([]);

    const nextPage = () => {
        console.log("next",page);
        setPage(page + 1);
    }
    const prevPage = () => {
        console.log("preve",page)
         setPage(page-1);
    }

    const addLike = (item, setItem) => {
        let items = [...likedList];
        items.push(item);
        setLikedList(items);
        console.log(blockedList)
    }

    const addBlock = (item, setBlocked) => {
        let items = [...blockedList];
        items.push(item);
        setBlockedList(items);
        console.log(likedList);

    }
    
    let movies = useSelector(getAllMovies);

    let renderMovies = "";
    renderMovies =
        movies.results ? (
            movies.results.map((movie) => (
                <MovieCard key={movie.id} data={movie} like={addLike} block={addBlock} />
            ))
        ) : (
            <div>Error message</div>
        )

    return <div className="movieListContainer">
        <h1>Our Top Rated Movies List</h1>  
        {/* temporary sort button */}
        <div className="sortButtons">
            <button className="btn btn-primary">Title <i className="bi bi-arrow-down"></i></button>
            <button className="btn btn-primary">Vote  <i className="bi bi-arrow-down"></i></button>
            <button className="btn btn-primary">Count <i className="bi bi-arrow-down"></i></button>
            <button className="btn btn-primary">Date <i className="bi bi-arrow-down"></i></button>
        </div>
        
        <div className="pageContainer">
            <button className="pageButtons" disabled={page === 1 ? true : false} onClick={() => prevPage()}><i className="bi bi-caret-left-square attemp"></i></button>
            <button className="pageButtons" onClick={() => nextPage()}><i className="bi bi-caret-right-square attemp"></i></button>
        </div>
        <GetMovieData page={page}/>
        <div className="movieList ">
            <Suspense fallback={<div>Loading...</div>}>
                {renderMovies}
            </Suspense>
        </div>
    </div>

}

export default MovieList;