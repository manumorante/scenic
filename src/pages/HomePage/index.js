import React, { useContext } from 'react'
import UIContext from '../../context/UIContext.js'

export const HomePage = () => {
  const { keywords } = useContext(UIContext)

  return (
    <div className="Home">
      <div className="container">
        <p>{keywords}</p>
      </div>
    </div>
  )
}
