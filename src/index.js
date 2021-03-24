import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/styleguide" component={StyleGuidePage} />
          <Route path="/:id" component={MoviePage} />
        </Switch>
        <Footer />
      </Router>
    </SearchContextProvider>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
