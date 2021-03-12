import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

import { Home } from './components/Home'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
