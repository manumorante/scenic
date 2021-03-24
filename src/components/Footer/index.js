import React from 'react'
import { Button } from '../Button'
import './styles.scss'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <Button to="/styleguide">Styleguide</Button>
      </div>
    </div>
  )
}
