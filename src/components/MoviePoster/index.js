import React from 'react'
import './styles.scss'

export function MoviePoster({ movie }) {
  const { poster_path } = movie
  const imgBaseURL = 'http://image.tmdb.org/t/p/w300'
  const poster = `${imgBaseURL}/${poster_path}`

  return (
    <div className="MoviePoster">
      <img className="MoviePoster__image" src={poster} />      
      <div className="frame"></div>
    </div>
  )
}
