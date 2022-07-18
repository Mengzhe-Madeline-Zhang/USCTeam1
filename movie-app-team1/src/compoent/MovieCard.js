import React from 'react'
import { useState, useEffect } from "react";
import LikedList from '../components/likelist/LikeList';


function MovieCard(props) {
    const {data} = props;
    const img_baseUrl = "https://image.tmdb.org/t/p/w500"
    
    //Don't use it, currently we are rerender
    const [liked, setLiked] = useState({
        like : false,
        source : data
    })

    const [blocked,setBlocked] = useState({
        block: false,
        source : data
    })

    const changeLikeStatus = () => {
      if (liked !== true){
        setLiked(liked.like = true);
      }
      return liked;
    }

    const changeBlockStatus = () => {
      if (blocked !== true){
        setBlocked(blocked.block = true);
      }
      return blocked;
    }
    
    let maxLength = "";
    if (data.overview.split(".")[0].length < 20){
      maxLength = data.overview.substring(0,50) + "...";
    } else {
      maxLength = data.overview.split(".")[0] + "...";
    }

    // const [likedmovies,setLikedmovies] = useState([]);
    const [likes,setLikes] = useState({
      likes: data.likedmovies,
      source : data
  })

    const addtoLikedList=(movie)=>{
      // const exist = likedmovies.find((m)=> m.id === movie.id);
      // if(!exist){
        setLikes([...likes, movie]);
        // console.log("addtolike" + JSON.stringify(movie));
      // }
      // console.log("likelist" + JSON.stringify(likedmovies));
    }

    useEffect(() => {
      // console.log("likelist: ", likes);
    }, [likes])

  return (
    <div className='movie' style={{opacity: blocked.block === false ? 1 : 0}}>
        <img src={img_baseUrl+data.poster_path}></img>
        <div className='buttonType'>
          <button className="btn btn-danger Like" onClick={() => props.like(changeLikeStatus())
            // addtoLikedList(props.data)
            }>{liked.like === false ? "Like" : "Liked"}</button>
          <button className="btn btn-secondary Block" onClick={() => props.block(changeBlockStatus())}>Block</button>
        </div>
        <p id="title"><i className="bi bi-heart-fill"></i> {data.title}</p>
        <p className='movie_description'>Description : {maxLength}</p>
    </div>
  )
}

export default MovieCard