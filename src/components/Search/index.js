import React from 'react'
import './styles.scss'

const onChangeHandle = () => {
  console.log('onChangeHandle')
}

const formSubmitHandle = (event) => {
  event.preventDefault()
  console.log('formSubmitHandle')
}

export const Search = () => {
  return (
    <div className="Search">
      <form onSubmit={formSubmitHandle}>
        <input
          className="Search__input"
          type="search"
          placeholder=""
          onChange={onChangeHandle}
        />
      </form>
    </div>
  )
}
