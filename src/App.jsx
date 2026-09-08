import React from 'react'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import About from './pages/About'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Brochure from './pages/Brochure'
import Head from './pages/Head'



const App = () => {
  return (
    <>
<div>
  <Head/>
        <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a className="navbar-brand" href="/">My App</a>
          <button className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarMenu'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarMenu'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to="/">Home</Link>
              </li>
              {/* Courses Dropdown */}
              <li className="nav-item dropdown">

                <Link
                  className="nav-link dropdown-toggle"
                  to="/courses"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>

                <ul className="dropdown-menu">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/courses/judiciary"
                    >
                      Judiciary Courses
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/courses/clat"
                    >
                      CLAT Courses
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/courses/du-llb"
                    >
                      DU LLB Courses
                    </Link>
                  </li>

                </ul>

              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'

                  to="/blogs">Blogs</Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'

                  to="/about">About</Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'

                  to="/login">Login</Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/brochure' element={<Brochure />} />
        </Routes>
      </main>
              <Footer/>

</div>

    </>
  )
}

export default App
