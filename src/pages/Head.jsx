import React from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'


const Head = () => {
    return (
        <div>
            <p> © 2026 My App. All Rights Reserved.</p>
            <div className='d-flex justify-content-center align-items-end'>
                <ul>              <li className='nav-item'>
                                <Link
                                  className='nav-link'
                
                                  to="/contact">Contact</Link>
                              </li>
                              <li className='nav-item'>
                                <Link
                                  className='nav-link'
                
                                  to="/brochure">E-Brochure</Link>
                              </li>
                
                </ul>


            </div>

        </div>
    )
}

export default Head
