import React from 'react'
import { Logo } from '../Logo'
import { Button } from '../Button'
import './styles.scss'

export const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <Button to="/styleguide">Styleguide</Button>
    </div>
  )
}
