import React from 'react'
import { Logo } from '../Logo'
import { MovieList } from '../MovieList'

export const Home = () => {
  return (
    <div className="Home page">
      <Logo />
      <p>Pet Project</p>
      <MovieList />
    </div>
  )
}
