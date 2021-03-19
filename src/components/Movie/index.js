import React from 'react'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function Movie({ movie }) {
  const { title, vote_average } = movie

  return (
    <div className="Movie">
      <div className="Movie__poster">
        <MoviePoster movie={movie} />
      </div>

      <div className="Movie__title">
        {title} ({vote_average})
      </div>
    </div>
  )
}
