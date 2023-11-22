import React, { useState } from 'react'
import logo from '../assets/logo.png';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [navbarState,setNavbarState]=useState(false)
  return (
    <>
      <nav>
        <div className="brand">
            <div className="container">
                <img src={logo} alt="" />Tourist
            </div>
            <div className="toggle">
                  {
                    navbarState?<CloseIcon onClick={()=>{setNavbarState(false)}}/>:
                    <MenuIcon onClick={()=>{setNavbarState(true)}}/>
                  }
            </div>
        </div>
        <ul>
            <a href='#hero'>Home</a>
            <a href='#services'>Services</a>
            <a href='#recommend'>Places</a>
            <a href='#testimonial'>Testimonial</a>
        </ul>
        <button>Connect</button>
      </nav>
      <div className={`Navbar ${navbarState?'true-style':'false-style'}`}>
      <ul>
            <a onClick={()=>{setNavbarState(false)}} href='#hero'>Home</a>
            <a onClick={()=>{setNavbarState(false)}} href='#services'>Services</a>
            <a onClick={()=>{setNavbarState(false)}} href='#recommend'>Places</a>
            <a onClick={()=>{setNavbarState(false)}}  href='#testimonial'>Testimonial</a>
        </ul>
      </div>
    </>
  )
}

export default Navbar
