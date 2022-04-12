import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, Outlet, useNavigate } from 'react-router-dom'

import { NavLink } from 'react-router-dom';
import { search } from '../../api/product';
import Search from '../Search';
type FormSearch = {
  name: string
}

const WebsiteLayout = (props: FormSearch) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSearch>();
  const navigate = useNavigate()
  const onSumbit: SubmitHandler<FormSearch> = async (name: any) => {
    const { data } = await search(JSON.stringify(name.name));
    console.log(data);
    navigate({
      pathname: '/search',
      search: `?q=${JSON.stringify(name.name)}`,
    });
  }
  const userLocal = JSON.parse(localStorage.getItem("user") as string);

  return (
    <div>
      <header className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-left" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
              <li><a href=""><img src="https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="mdo" width={40} height={40} className="rounded-circle ml-0" /></a></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/">Home Page</NavLink></li>
              <li><NavLink className="nav-link px-2 link-dark" to="/product">Product</NavLink></li>
              {
                localStorage.getItem("user") ?
                  <><li><NavLink className="nav-link px-2 link-dark" to="/cart">Cart</NavLink></li>
                    <li><NavLink className="nav-link px-2 link-dark" to="/" >Logout</NavLink></li>
                    <li><NavLink className="nav-link px-2 link-dark" to="/">{userLocal.user.email}</NavLink></li></> :
                  <><li><NavLink className="nav-link px-2 link-dark" to="/signin">SignIn</NavLink></li>
                    <li><NavLink className="nav-link px-2 link-dark" to="/signup">SignUp</NavLink></li></>
              }
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <form className="w-100 me-3" onSubmit={handleSubmit(onSumbit)}>
              <input type="search" {...register('name')} className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <p style={{ marginTop: 35 }} />
      <footer className="text-center text-black mt-10" style={{ backgroundColor: '#f1f1f1' }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Form */}
          <section>
            <form>
              {/*Grid row*/}
              <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-5 col-12">
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input type="email" id="form5Example27" className="form-control" />
                    <label className="form-label" htmlFor="form5Example27">Email address</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-auto">
                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
          </section>
          {/* Section: Form */}
        </div>

        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          MSV:
          <a className="text-dark" href="https://mdbootstrap.com/">binhltph16803@fpt.edu.vn</a>
        </div>
        {/* Copyright */}
      </footer>

    </div>
  )
}

export default WebsiteLayout

