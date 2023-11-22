import React from 'react'
import homeImage from '../assets/hero.png'
import './Hero.css'

function Hero() {
  return (
    <div className='initial'>
        <section id='hero'>
          <div className="background">
            <img className='photo' src={homeImage} alt="" />
          </div>

          <div className="content">

              <div className="title">
                <h1>Travel to Explore</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem ad magnam explicabo saepe amet cumque rem doloribus excepturi incidunt facilis sint beatae at eligendi quia repellendus veniam, quasi omnis!</p>
              </div>

              <div className="search">
                <div className="container1">
                  <label htmlFor=''>Where you want to go</label>
                  <input type='text' placeholder='Search your location'/>
                </div>
                <div className="container1">
                  <label htmlFor=''>Check-in</label>
                  <input type='date'/>
                </div>
                <div className="container1">
                  <label htmlFor=''>Check-out</label>
                  <input type='date'/>
                </div>
                <button className='switch'>Explore Now</button>
              </div>

          </div>
        </section>
    </div>
  )
}

export default Hero;
