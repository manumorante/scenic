import React from 'react'
import './styles.scss'

import { config } from '../../domain/config'
import { Movie } from '../../components/Movie'
import { MoviePoster } from '../../components/MoviePoster'
import { StyleElement } from '../../components/StyleElement'
import { Search } from '../../components/Search'
import { Button } from '../../components/Button'

export const StyleGuidePage = () => {
  const movie = {
    title: "Zack Snyder's Justice League",
    vote_average: 10,
    poster: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg'
  }

  return (
    <div className="StyleguidePage container">
      <div className="StyleguidePage__elements">
        <StyleElement title="Colors">
          <div className="SG-colors">
            <div className="SG-color color-primary"></div>
            <div className="SG-color color-primary-dark"></div>

            <div className="SG-color color-dark-0"></div>
            <div className="SG-color color-dark-1"></div>
            <div className="SG-color color-dark-2"></div>
            <div className="SG-color color-dark-3"></div>

            <div className="SG-color color-light-0"></div>
            <div className="SG-color color-light-1"></div>
            <div className="SG-color color-light-2"></div>
            <div className="SG-color color-light-3"></div>
            <div className="SG-color color-light-4"></div>
          </div>
        </StyleElement>

        <StyleElement title="Button">
          <p><Button>Normal</Button></p>            
          <p><Button className="primary">Primary</Button></p>
        </StyleElement>

        <StyleElement title="Text">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph</p>
          <a href="">Link</a>
        </StyleElement>

        <StyleElement title="Search">
          <Search />
        </StyleElement>

        <StyleElement title="MoviePoster">
          <MoviePoster poster={movie.poster} />
        </StyleElement>

        <StyleElement title="Movie">
          <Movie id="1" poster={movie.poster} />
        </StyleElement>
      </div>
    </div>
  )
}
