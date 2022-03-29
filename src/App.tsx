import { useEffect, useState } from 'react'
import './App.css'

import { Navigate, NavLink, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </header>
        <main>
          <Routes>
          </Routes>
        </main>
    </div>
  )
}

export default App




