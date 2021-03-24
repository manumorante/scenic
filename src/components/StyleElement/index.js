import React from 'react'
import './styles.scss'

export const StyleElement = (props) => {
  return (
    <article className="StyleElement">
      <h3 className="StyleElement__title">{props.title}</h3>
      <div className="StyleElement__body">{props.children}</div>
    </article>
  )
}
