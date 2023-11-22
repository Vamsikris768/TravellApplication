import './App.css';
import React, { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Recommend from './Components/Recommend';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import scrollreveal from 'scrollreveal'

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommend/>
      <Testimonial/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
