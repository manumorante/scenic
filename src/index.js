import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

import { HomePage } from './components/HomePage'
import { StyleGuidePage } from './components/StyleGuidePage'
import './index.scss'

const App = () => {
  return (
    <Router>
      {/* <Route path="/" exact component={HomePage} /> */}
      <Route path="/" exact component={StyleGuidePage} />
    </Router>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export { App }
