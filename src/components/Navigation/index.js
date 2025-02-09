import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export const Navigation = () => {
  return (
    <nav className="Navigation">
      <Link className="Navigation__link" to="/movies/popular">
        Popular
      </Link>

      <Link className="Navigation__link" to="/movies/top-rated">
        Top rated
      </Link>

      <Link className="Navigation__link Navigation__link--optional" to="/styleguide">
        Styleguide
      </Link>
    </nav>
  )
}
