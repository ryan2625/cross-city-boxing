import React from 'react'
import { useState } from 'react'
import boxingLogo from './boxingLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css'

function Navbar() {

    const [nav, setNav] = useState(false)

    function handleClick(){
        if (nav === false){
            document.body.classList.add("remove-scroll")
        } else {
            document.body.classList.remove("remove-scroll")
        }
        setNav(!nav)
    }

  return (
    <div className='navbar'>
        <div className="logo">
           
        </div>
        <div className="nav">
            <nav>
                <ul className='navLinks'>
                    <li id='menuIcon' onClick={ handleClick }>
                        <MenuIcon />
                    </li>
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
                <ul className={nav ? "mobileLinks" : "mobileLinks mobileLinks2"}>
                    <div className="mobileMenu">
                <li id='menuIcon2' onClick={ handleClick }>
                        <CloseIcon />
                    </li>
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
                    </div>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar