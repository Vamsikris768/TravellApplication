import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

function Footer() {
  return ( 
    <section className='main2'>
      <div className='copy'>
          <span>Copyright &copy; 2021 Travelo.All rights reserved</span>
      </div>
      <ul className='list-items'>
          <a className='item-1' href='#hero'>Home</a>
          <a className='item-1' href='#services'>Services</a>
          <a className='item-1' href='#recommend'>Places</a>
          <a className='item-1' href='#testimonial'>Testimonial</a>
        </ul>
        <div className='symbols'>
          <span><FacebookIcon className='icons'/></span>
          <span><InstagramIcon className='icons'/></span>
          <span><LinkedInIcon className='icons'/></span>
        </div>
    </section>
  )
}

export default Footer
