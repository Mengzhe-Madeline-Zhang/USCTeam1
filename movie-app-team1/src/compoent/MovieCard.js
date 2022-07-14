import React from 'react'

function MovieCard(props) {
    const {data} = props;
    const img_baseUrl = "https://image.tmdb.org/t/p/w500"
  return (
    <div>
        <img src={img_baseUrl+data.backdrop_path}></img>
    </div>
  )
}

export default MovieCard