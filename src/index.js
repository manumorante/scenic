import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { MoviePage } from './components/MoviePage'
import { StyleGuidePage } from './components/StyleGuidePage'
import { Footer } from './components/Footer'
import { UIContextProvider } from './context/UIContext.js'
import { MovieListPage } from './components/MovielistPage'
import './index.scss'

const App = () => {
  return (
    <UIContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/movies/:type" component={MovieListPage} />
          <Route path="/" exact component={StyleGuidePage} />
        </Switch>
        <Footer />
      </Router>
    </UIContextProvider>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
