import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UIContext from '../../context/UIContext'
import './styles.scss'

export const Search = () => {
  const { keywordsSearch, setKeywordsSearch } = useContext(UIContext)
  const history = useHistory()

  const handleChange = (evt) => {
    setKeywordsSearch(evt.target.value)
  }

  const handleBlur = (evt) => {
    const input = evt.target
    input.dataset.filled = input.value.trim() != ''
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    history.push(`/search/${keywordsSearch}`)
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
      </form>
    </div>
  )
}
