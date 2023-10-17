import React from 'react'
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS } from 'react'
import boxingLogo from './boxingLogo.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
           
        </div>
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Fighters</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <button>Sign Up</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar