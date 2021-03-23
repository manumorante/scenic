import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { MoviePage } from './components/MoviePage'
import { StyleGuidePage } from './components/StyleGuidePage'
import { Footer } from './components/Footer'
import './index.scss'
import { SearchContextProvider } from './context/searchContext.js'

const App = () => {
  return (
    <SearchContextProvider>
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/styleguide" children={<StyleGuidePage />} />
        <Route path="/movie/:id" children={<MoviePage />} />
        <Footer />
      </Router>
    </SearchContextProvider>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
