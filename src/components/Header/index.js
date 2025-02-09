import React from 'react'
import { Logo } from '../Logo'
import { Search } from '../Search'
import { Navigation } from '../Navigation'
import './styles.scss'

export const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header__body">
          <Logo />
          <div className="Header__actions">
            <Navigation />
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}
