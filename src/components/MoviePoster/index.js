import React from 'react'
import './styles.scss'
import { config } from '../../domain/config'

export function MoviePoster({ poster }) {
  const poster_path = `${config.imgBaseURL}/w500${poster}`

  return (
    <div className="MoviePoster">
      <div className="MoviePoster__poster">
        <img className="MoviePoster__image" src={poster_path} />
      </div>
    </div>
  )
}
