import React from 'react'
import './styles.scss'

export function MoviePoster({ posterPath, big = false }) {
  const imageSize = big ? 500 : 300
  const className = big ? 'MoviePoster--big' : ''
  const imgBaseURL = `http://image.tmdb.org/t/p`
  const poster = `${imgBaseURL}//w${imageSize}/${posterPath}`

  return (
    <div className={`MoviePoster ${className}`}>
      <img className="MoviePoster__image" src={poster} />
      <div className="frame"></div>
    </div>
  )
}
