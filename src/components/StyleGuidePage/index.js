import React from 'react'
import './styles.scss'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { Navigation } from '../Navigation'
import { Movie } from '../Movie'
import { MoviePoster } from '../MoviePoster'
import { StyleElement } from '../StyleElement'

export const StyleGuidePage = () => {
  const movie = {
    title: "Zack Snyder's Justice League",
    vote_average: 10,
    poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg'
  }

  return (
    <div className="StyleguidePage page">
      <h1>Styleguide</h1>

      <StyleElement title="Logo">
        <Logo />
      </StyleElement>

      <StyleElement title="Button">
        <Button />
      </StyleElement>

      <StyleElement title="Navigation">
        <Navigation />
      </StyleElement>

      <StyleElement title="MoviePoster">
        <MoviePoster movie={movie} />
      </StyleElement>

      <StyleElement title="Movie">
        <Movie movie={movie} />
      </StyleElement>
    </div>
  )
}
