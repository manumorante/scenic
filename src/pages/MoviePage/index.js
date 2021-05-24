import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Domain } from '../../domain'
import { MoviePoster } from '../../components/MoviePoster'
import { MovieList } from '../../components/MovieList'
import './styles.scss'

export const MoviePage = () => {
  const domain = Domain.create()
  const [movie, setMovie] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const { id } = useParams()

  useEffect(function () {
    domain.GetMovieUseCase.execute({ movieID: id }).then(setMovie)
    domain.GetSimilarMoviesUseCase.execute({ movieID: id }).then(setSimilarMovies)    
  }, [])
  
  const {
    directors,
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
          <p>Directed by: {directors}</p>
          <p>{description}</p>
          <p>rating: {rating}</p>
          <p>released: {released}</p>
          <MovieList movies={similarMovies} />
        </div>
      </div>
    </div>
  )
}
