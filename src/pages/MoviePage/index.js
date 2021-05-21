import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Domain } from '../../domain'
import { MoviePoster } from '../../components/MoviePoster'
import './styles.scss'

export const MoviePage = () => {
  const domain = Domain.create()
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(function () {
    domain.GetMovieUseCase.execute({
      movieID: id
    }).then((response) => {
      setMovie(response)
    })
  }, [])

  const {
    title,
    poster_path,
    description,
    rating,
    released
  } = movie

  return (
    <div className="MoviePage">
      <div className="MoviePage__body container">
        <div className="MoviePage__poster">
          <MoviePoster posterPath={poster_path} big />
        </div>

        <div className="MoviePage__info">
          <h1 className="MoviePage__title">{title}</h1>
          <p>Directed by: "implement!"</p>
          <p>{description}</p>
          <p>rating: {rating}</p>
          <p>released: {released}</p>
        </div>
      </div>
    </div>
  )
}
