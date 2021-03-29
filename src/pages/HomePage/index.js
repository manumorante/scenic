import React, { useContext } from 'react'
import UIContext from '../../context/UIContext.js'

export const HomePage = () => {
  const { keywords } = useContext(UIContext)

  return (
    <div className="Home">
      <div className="container">
        <h1>Home, nada por ahora.</h1>
      </div>
    </div>
  )
}
