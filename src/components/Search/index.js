import React, { useContext } from 'react'

import SearchContext from '../../context/searchContext.js'
import './styles.scss'

export const Search = () => {
  const { keywords, setKeywords } = useContext(SearchContext)

  const handleChange = (evt) => {
    setKeywords(evt.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          className="Search__input"
          type="search"
          placeholder=""
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
