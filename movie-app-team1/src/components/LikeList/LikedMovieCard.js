import React from 'react'

function LikedMovieCard(props) {
    const {data} = props;
    const img_baseUrl = "https://image.tmdb.org/t/p/w500"

  return (
    <div className='movie'>
        <div className="likedMovieImgBox">
        <img src={img_baseUrl+data.poster_path}></img>
        </div>
        <div className='hoverbtns'>
          <button className="btn"> <i className="bi bi-trash-fill"></i></button>
          <button className="btn"><i className="bi bi-slash-circle"></i></button>
          <button className="btn"><i className="bi bi-three-dots"></i></button>
        </div>
    </div>
  )
}

export default LikedMovieCard