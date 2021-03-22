import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { MoviePage } from './components/MoviePage'
import { StyleGuidePage } from './components/StyleGuidePage'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact children={<HomePage />} />
      <Route path="/styleguide" children={<StyleGuidePage />} />
      <Route path="/movie/:id" children={<MoviePage />} />
    </Router>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
