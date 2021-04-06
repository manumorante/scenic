import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UIContext from '../../context/UIContext.js'

export const HomePage = () => {
  const { keywordsSearch } = useContext(UIContext)

  return (
    <div className="Home">
      <div className="container">
        <h1>Home.</h1>
        <p>
          Try to search for <Link to="search/batman">batman</Link>
        </p>
      </div>
    </div>
  )
}
