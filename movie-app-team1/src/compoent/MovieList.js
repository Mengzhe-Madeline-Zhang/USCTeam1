import React, { createContext, Suspense, useContext } from "react";
import { useState, useEffect } from "react";
import movieApi from "../apis/movieApi";
import { APIkey } from "../apis/movieApiKey";
import Loading from "./Loading";

import "./MovieList.css";

const MovieCard = React.lazy(() => import("./MovieCard"));


const GetMovieData = ({page}) => {
    const {data, setData} = useContext(DataContext);

    // const {data, setData} = useContext(DataContext);
    const currPage = `page${page}`;

    useEffect(() => {
        if(!data[currPage]) {
            const fetchMovies = async () => {
                const response = await movieApi.get(`popular?api_key=${APIkey}&language=en-US&page=${page}`)
                    .catch((err) => {
                        console.log("err: ", err);
                    });
                    
                    const singleMovieData = response.data;
                    // console.log(singleMovieData);

                    const newData = configData(singleMovieData,currPage);
                    // console.log(newData);
                    const addData = {...data, [currPage] : newData}
                    // console.log(singleMovieData);
                    setData(addData);
            };
            fetchMovies();
        }
    },[page])
}

//Deconstructing movie data
const configData = (newData,page) => {
    
    const addData = [];
    newData.results.forEach((data) => {
        let {poster_path,release_date,vote_average,vote_count,title,overview,id} = data;
        const singleMovieData = {
            poster_path : poster_path,
            release_date : release_date,
            vote_average : vote_average,
            vote_count : vote_count,
            title : title,
            overview : overview,
            likeButton : false,
            blockButton : false,
            id : id
        }
        addData.push(singleMovieData);
    })
    // console.log(addData)
    return addData;
}

const DataContext = createContext(null);

const MovieList = (props) => {
    const [page, setPage] = useState(1);
    const [likedList, setLikedList] = useState([
    ]);

    const [blockedList, setBlockedList] = useState([]);

    const [data,setData] = useState({});

    const nextPage = () => {
        console.log("next",page);
        setPage(page + 1);
    }
    const prevPage = () => {
        console.log("preve",page)
         setPage(page-1);
    }

    const likeButtonHandler = (id) => {
        const index = data[`page${page}`].findIndex((elem) => elem.id === id) 
        
        let items = {...data};
        let item = items[`page${page}`][index];
        item.likeButton = true;
        setData(items);
        // console.log(data);
        props.likes({page : `page${page}`, data : item});
    }

    const blockButtonHandler = (id) => {
        console.log(data);
        const index = data[`page${page}`].findIndex((elem) => elem.id === id);

        let items = {...data};
        let item = items[`page${page}`];
        let specifc = item[index];
        specifc.blockButton = true;
        item.splice(index,1);
        setData(items);
        props.blocks({page : `page${page}`, data : specifc});
    
    }
    const currPage = `page${page}`;
    
    let renderMovies = 
        data[currPage] ? (
            data[currPage].map((movie) => 
                <MovieCard key={movie.id} data={movie} like={likeButtonHandler} block={blockButtonHandler} />
            )
        ) : (
            <div><Loading/></div>
        )
            

    return  <DataContext.Provider value={{data,setData}}>
    <div className="movieListContainer">
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
    </DataContext.Provider>

}

export default MovieList;