import React from 'react'

function MovieCard(props) {
    const {data} = props;
    const img_baseUrl = "https://image.tmdb.org/t/p/w500"
    //Don't use it, currently we are rerender
   
    let maxLength = "";
    if (data.overview.split(".")[0].length < 20){
      maxLength = data.overview.substring(0,50) + "...";
    } else {
      maxLength = data.overview.split(".")[0] + "...";
    }

  return (
    <div className='movie'>
        <img src={img_baseUrl+data.poster_path} alt="loading data"></img>
        <div className='buttonType'>
          <button className="btn btn-danger Like" onClick={() => props.like(data.id)}>{data.likeButton === false ? "Like" : "Liked"}</button>
          <button className="btn btn-secondary Block" onClick={() => props.block(data.id)}>Block</button>
        </div>
        <p id="title"><i className="bi bi-heart-fill"></i> {data.title}</p>
        <p className='movie_description'>Description : {maxLength}</p>
    </div>
  )
}

export default MovieCard