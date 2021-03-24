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
          <div className="Header__logo">
            <Logo />
          </div>

          <div className="Header__search">
            <Search />
          </div>
        </div>

        <div className="Header__nav">
          <Navigation />
        </div>
      </div>
    </div>
  )
}
