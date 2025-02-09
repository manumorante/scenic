import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UIContext from '../../context/UIContext'
import './styles.scss'

export const Search = ({ placeholder = 'Search...', className = '' }) => {
  const { keywordsSearch, setKeywordsSearch } = useContext(UIContext)
  const history = useHistory()

  const handleChange = (evt) => {
    setKeywordsSearch(evt.target.value.trim())
  }

  const handleBlur = (evt) => {
    const input = evt.target
    input.dataset.filled = input.value.trim() !== ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Solo navega si hay texto válido
    if (keywordsSearch.trim()) {
      history.push(`/search/${encodeURIComponent(keywordsSearch)}`)
    }
  }

  return (
    <div className={`Search ${className}`.trim()}>
      <form onSubmit={handleSubmit} role="search">
        <input
          type="search"
          className="Search__input"
          placeholder={placeholder}
          value={keywordsSearch}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-label="Search input"
          data-lpignore="true"
          autoComplete="off"
          minLength={2}
          maxLength={50}
        />
      </form>
    </div>
  )
}
