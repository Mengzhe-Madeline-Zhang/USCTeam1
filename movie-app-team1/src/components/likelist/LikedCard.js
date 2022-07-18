import React from 'react'
import { useState, useEffect } from "react";

function LikedCard(props) {
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
    

  return (
    <div className='movie'>
        <img src={img_baseUrl+data.poster_path}></img>
        <div className='buttonType'>
          <button className="btn btn-danger Like" onClick={() => props.like(changeLikeStatus())}>{liked.like === false ? "Like" : "Liked"}</button>
          <button className="btn btn-secondary Block" onClick={() => props.block(changeBlockStatus())}>Block</button>
        </div>
    </div>
  )
}

export default LikedCard;