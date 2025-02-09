import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { MoviePage } from './pages/MoviePage'
import { SearchMoviesPage } from './pages/SearchMoviesPage'
import { StyleGuidePage } from './pages/StyleGuidePage'
import { Footer } from './components/Footer'
import { UIContextProvider } from './context/UIContext.js'
import { TypeListPage } from './pages/TypeListPage'
import './styles/styles.scss'

const App = () => {
  return (
    <UIContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={TypeListPage} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/movies/:type" component={TypeListPage} />
          <Route path="/search/:keywordsParams" component={SearchMoviesPage} />
          <Route path="/styleguide" exact component={StyleGuidePage} />
        </Switch>
        <Footer />
      </Router>
    </UIContextProvider>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
