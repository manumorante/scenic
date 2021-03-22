import React from 'react'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Search } from '../Search'
import './styles.scss'

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <Logo />
      </div>

      <div className="Header__actions">
        <Button to="/styleguide">Styleguide</Button>
      </div>

      <div className="Header__actions">
        <Search />
      </div>
    </div>
  )
}
