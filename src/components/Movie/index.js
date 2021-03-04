import React from 'react'
import './styles.scss'

export function Movie({ movie }) {
  const { title, vote_average } = movie

  return (
    <div className="Movie">
      {title} ({vote_average})
    </div>
  )
}
