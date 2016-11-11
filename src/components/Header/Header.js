import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (

  <div className="menu">
    <div>
      <IndexLink to='/' activeClassName='route--active'>
        Time for Surfing
      </IndexLink>
    </div>
    <div>
      <Link to='/contact' activeClassName='route--active'>
        Who is behind all this?
      </Link>
    </div>
  </div>
)

export default Header
