import React, { useContext } from 'react'

import UIContext from '../../context/UIContext.js'
import { Button } from '../Button/index.js'
import './styles.scss'

export const Search = () => {
  const { keywords, setKeywords } = useContext(UIContext)

  const handleChange = (evt) => {
    setKeywords(evt.target.value)
  }

  const handleBlur = (evt) => {
    const input = evt.target
    input.dataset.filled = input.value.trim() != ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="Search__input"
          onBlur={handleBlur}
          onChange={handleChange}
          data-lpignore
          inputMode="true"
        />
        <Button to="/">Buscar</Button>
      </form>
    </div>
  )
}
