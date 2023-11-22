import React, { useState } from 'react'
import logo from '../assets/logo.png'
import './ScrollToTop.css';



function ScrollToTop() {
  const [scrollState,setScrollState]=useState(false)

  window.onscroll=()=>{
    setScrollState(window.pageYOffset>100?true:false)
  }
  
  // window.addEventListener('scroll',()=>{
  //   window.pageYOffset>100?setScrollState(true):setScrollState(false)
  // })

  const toTop=()=>{
    window.scrollTo({top:0})
  }

  return (
    <div className={`ScrollToTop ${scrollState ? 'true-style' : 'false-style'}`} onClick={toTop}>
      <img className='logo1' src={logo} alt="" />
    </div>
  )
}

export default ScrollToTop

