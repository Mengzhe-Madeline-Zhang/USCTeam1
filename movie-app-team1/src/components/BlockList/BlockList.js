import React,{useContext} from "react";
import BlockedMovieCard from "./BlockedMovieCard";
import Loading from "../Loading";
import "./BlockList.css";

const BlockList=(props) =>{

  let blocklist = props;

    let renderMovies = blocklist ? (
        blocklist.movies.map((movie) => (
            <BlockedMovieCard
            unblock={props.unblock} 
            blocktoLike={props.blocktoLike}
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
        <div className="blockListContainer">
            <h2>MovieList of Blocked</h2>
            <div className="blockList">
            {renderMovies}
            </div>
        </div>
    );
}

export default BlockList;