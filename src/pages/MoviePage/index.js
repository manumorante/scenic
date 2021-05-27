import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Domain } from '../../domain'
import { MoviePoster } from '../../components/MoviePoster'
import { SimilarMovies } from '../../components/SimilarMovies'
import { config } from '../../domain/config'
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
    poster,
    description,
    rating,
    released
  } = movie

  const poster_path = `${config.imgBaseURL}/w500${poster}`

  return (
    <div className="MoviePage">
      <div className="MoviePage__hero">
        <img src={poster_path}></img>
      </div>

      <div className="container">
        <div className="MoviePage__body">
          <div className="MoviePage__poster">
            <MoviePoster poster={poster} />
          </div>

          <div className="MoviePage__info">
            <h1 className="MoviePage__title">{title}</h1>
            <p>{released} • {directors}</p>
            <p>{description}</p>            
          </div>

          <div className="MoviePage__sidebar">
            <div className="MoviePage__rate">{rating}</div>
          </div>
        </div>

        <h2 className="MoviePage__section-title">Similar movies</h2>
        <SimilarMovies movies={similarMovies} />
      </div>
    </div>
  )
}
