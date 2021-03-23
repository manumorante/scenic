import React from 'react'
import { Logo } from '../Logo'
import { Search } from '../Search'
import './styles.scss'

export const Header = () => {
  return (
    <div className="Header">
      <div class="Header__body container">
        <div className="Header__logo">
          <Logo />
        </div>

        <div className="Header__actions">
          <Search />
        </div>
      </div>
    </div>
  )
}
