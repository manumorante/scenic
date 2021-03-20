import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export const Button = (props) => {
  return (
    <Link className={`Button ${props.className}`} to={props.to}>
      {props.children}
    </Link>
  )
}
