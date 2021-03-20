import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export const Logo = () => {
  return (
    <Link className="Logo" to="/">
      <h1>Scenic</h1>
    </Link>
  )
}
