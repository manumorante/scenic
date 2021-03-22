import React, { useState, useEffect } from 'react'

import { Domain } from '../../domain'
import { MovieList } from '../MovieList'

export const HomePage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const [keywords, setkeywords] = useState('')

  const handleChange = (evt) => {
    setkeywords(evt.target.value)
  }

  const formSubmitHandle = (event) => {
    event.preventDefault()
    console.log('formSubmitHandle')
  }

  useEffect(function () {
    domain.GetTrendingMoviesUseCase.execute().then(setMovies)
  }, [])

  return (
    <div className="Home">
      <form onSubmit={formSubmitHandle}>
        <input
          className="Search__input"
          type="search"
          placeholder=""
          onChange={handleChange}
          value={keywords}
        />
      </form>

      <p>{keywords}</p>

      <MovieList movies={movies} />
    </div>
  )
}
