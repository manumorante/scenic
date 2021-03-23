import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export const Logo = () => {
  return (
    <Link className="Logo" to="/">
      <div className="Logo__image">Scenic</div>
    </Link>
  )
}
