import React from "react"
import { Logo } from "./Logo/Logo"
import { getTrendingMovies } from "../services/getTrendingMoviesService.js"

export const Home = () => {
  getTrendingMovies().then(console.log)
  return (
    <div className="Home page">
      <Logo />
      <p>Pet Project</p>
    </div>
  )
}
