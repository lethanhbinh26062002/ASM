import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom';
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-left" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div>
          
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
              <li><a href=""><img src="https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="mdo" width={40} height={40} className="rounded-circle ml-0" /></a></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/">Home Page</NavLink></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/product">Product</NavLink></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/cart">Cart</NavLink></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/signin">SignIn</NavLink></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/signup">SignUp</NavLink></li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
          </div>
        </div>
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