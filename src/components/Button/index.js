import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export const Button = (props) => {
  const { className = '', to = '#' } = props
  return (
    <Link className={`Button ${className}`} to={to}>
      {props.children}
    </Link>
  )
}
