import React from "react";
import LikedMovieCard from "./LikedMovieCard";
import Loading from "../Loading";
import "./LikeList.css";

const LikeList=(props) =>{

  let likelist = props;
    let renderMovies = likelist ? (
        likelist.movies.map((movie) => (
            <LikedMovieCard
            key={movie.data.id}
            data={movie.data}
            />
        ))
    ) : (
        <div>
            <Loading />
        </div>
    );


    return (
        <div className="likeListContainer">
<h2>MovieList of Liked</h2>
<div className="likeList">
            {renderMovies}
            </div>
        </div>
    );
}

export default LikeList;