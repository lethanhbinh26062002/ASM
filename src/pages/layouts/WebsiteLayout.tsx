import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom';
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default WebsiteLayout