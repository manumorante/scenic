import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Domain } from '../../domain'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

const getDirectors = (response) => {
  const directors = []
  response.credits.crew.forEach(function (entry) {
    if (entry.job === 'Director') {
      directors.push(entry.name)
    }
  })
  return directors.join(', ')
}

export const MoviePage = () => {
  const domain = Domain.create()
  const [movie, setMovie] = useState([])
  const [directors, setDirectors] = useState('')
  const { id } = useParams()

  useEffect(function () {
    domain.GetMovieUseCase.execute({
      movieID: id
    }).then((response) => {
      console.log('response', response)
      // TODO
      setDirectors(getDirectors(response))
      setMovie(response)
    })
  }, [])

  const { title, overview, poster_path } = movie

  return (
    <div className="MoviePage">
      <div className="MoviePage__poster">
        <MoviePoster posterPath={poster_path} big />
      </div>

      <div className="MoviePage__info">
        <h1 className="MoviePage__title">{title}</h1>
        <p>Directed by: {directors}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}
