import React from 'react'
import { useParams } from 'react-router-dom'

export const MoviePage = () => {
  const { id } = useParams()
  return (
    <div className="MoviePage">
      <h1>Movie Page: {id}</h1>
    </div>
  )
}
