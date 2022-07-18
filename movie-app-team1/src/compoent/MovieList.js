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

    const[likedmovies, setLikedmovies] = useState([]);

    const nextPage = () => {
        console.log("next",page);
        setPage(page + 1);
        setClikedTitle(false);
        setClikedVote(false);
        setClikedCount(false);
        setClikedDate(false);  
    }
    const prevPage = () => {
        console.log("preve",page)
         setPage(page-1);
         setClikedTitle(false);
         setClikedVote(false);
         setClikedCount(false);
         setClikedDate(false);  
    }

    const addLike = (item, setItem) => {
        let items = [...likedList];
        items.push(item);
        setLikedList(items);
    }

    const addBlock = (item, setBlocked) => {
        let items = [...blockedList];
        items.push(item);
        setBlockedList(items);
        console.log(likedList);

    }

    const addLikeList = (item, setItem) => {
        let items = [...likedmovies];
        items.push(item);
        setLikedmovies(items);
        console.log(likedmovies);
    }
    
    const movieinfo = useSelector(getAllMovies);
    const [movies, setMovies] = useState(movieinfo.results);
    // let movies = useSelector(getAllMovies);
    console.log(movies);
    // console.log(typeof(movies.results))
    // console.log(movies.results)
   
    useEffect(()=>{
            setMovies(movieinfo.results);
    },[movieinfo])

    // let renderMovies = "";
    // renderMovies =
    //     movies.results ? (
    //         movies.results.map((movie) => (
    //             <MovieCard key={movie.id} data={movie} like={addLike} block={addBlock} likedmovies = {addLikeList}/>
    //         ))
    //     ) : (
    //         <div>Error message</div>
    //     )

        let renderMovies = "";
    renderMovies =
        movies ? (
            movies.map((movie) => (
                <MovieCard key={movie.id} data={movie} like={addLike} block={addBlock} likedmovies = {addLikeList}/>
            ))
        ) : (
            <div>Error message</div>
        )
const[clikedTitle, setClikedTitle] = useState(false);
const[clikedVote, setClikedVote] = useState(false);
const[clikedCount, setClikedCount] = useState(false);
const[clikedDate, setClikedDate] = useState(false);

        function sortTitle(){
            if(!clikedTitle){
                console.log(clikedTitle);
                let sortMovies = [...movies].sort((a,b)=>{
                    return a.title > b.title? 1 :-1 
                            })
                    setMovies(sortMovies);
                    setClikedTitle(true);
            } else {
                let sortMovies = [...movies].sort((a,b)=>{
                    return a.title < b.title? 1 :-1 
                            })
                    setMovies(sortMovies);
                    setClikedTitle(false);
            }
        }


    function sortVote(){
        if(!clikedVote){
            const sortMovies = [...movies].sort((a,b)=>{
                return a.vote_average > b.vote_average? -1 :1 
                        })
                       
                setMovies(sortMovies);
                setClikedVote(true);
        } else{
            const sortMovies = [...movies].sort((a,b)=>{
                return a.vote_average < b.vote_average? -1 :1 
                        })
                     
                setMovies(sortMovies);
                setClikedVote(false);
        }
       
    }

    function sortCount(){
        if(!clikedCount){
            const sortMovies = [...movies].sort((a,b)=>{
                return a.vote_count > b.vote_count? -1 :1 
                        })
                     
                setMovies(sortMovies);
                setClikedCount(true);
        }
        else{
            const sortMovies = [...movies].sort((a,b)=>{
                return a.vote_count < b.vote_count? -1 :1 
                        })
                     
                setMovies(sortMovies);
                setClikedCount(false);
        }
       
    }

    function sortDate(){
        if(!clikedDate){
            const sortMovies = [...movies].sort((a,b)=>{
                return a.release_date > b.release_date? -1 :1 
                        })
                       
                setMovies(sortMovies);
                setClikedDate(true);
        }else{
            const sortMovies = [...movies].sort((a,b)=>{
                return a.release_date < b.release_date? -1 :1 
                        })         
                setMovies(sortMovies);
                setClikedDate(false);
        }
      
    }

  

  

    return <div className="movieListContainer">
        <h1>Our Top Rated Movies List</h1>  
        {/* temporary sort button */}
        <div className="sortButtons">
            <button className="btn btn-primary" onClick={()=>sortTitle()}>Title {clikedTitle === false ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}</button>
            <button className="btn btn-primary" onClick={()=>sortVote()}>Vote  {clikedVote === false ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}</button>
            <button className="btn btn-primary" onClick={()=>sortCount()}>Count {clikedCount === false ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}</button>
            <button className="btn btn-primary" onClick={()=>sortDate()}>Date {clikedDate === false ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}</button>
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