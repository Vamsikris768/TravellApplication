import React from 'react'
import avatarImage from '../assets/avatarImage.jpeg'
import './Testimonial.css'


function Testimonial() {
  return (
    <section id='testimonial' >

      <div className="title1">
        <h2>Happy Customers</h2>
      </div>

      <div className='testimonials'>
        <div className='testimonial1'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex corrupti minima tempore quidem. Dolores quae ipsa eum nulla natus. </p>
          <div className="info1">
            <img className='imd' src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO-Shashaan Web Solutions</span>
            </div>
          </div>
        </div>

        <div className='testimonial1'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex corrupti minima tempore quidem. Dolores quae ipsa eum nulla natus.</p>
          <div className="info1">
            <img className='imd' src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <p>CEO-Shashaan Web Solutions</p>
            </div>
          </div>
        </div>

        <div className='testimonial1'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex corrupti minima tempore quidem. Dolores quae ipsa eum nulla natus.</p>
          <div className="info1">
            <img className='imd' src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <p>CEO-Shashaan Web Solutions</p>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Testimonial
