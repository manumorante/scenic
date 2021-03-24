import React from 'react'
import './styles.scss'
import { config } from '../../domain/config'

export function MoviePoster({ posterPath }) {
  const poster = `${config.imgBaseURL}/w500${posterPath}`

  return (
    <div className="MoviePoster">
      <div className="MoviePoster__poster">
        <img className="MoviePoster__image" src={poster} />
      </div>
    </div>
  )
}
