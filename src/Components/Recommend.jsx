import React, { useState } from 'react'
import Destination1 from '../assets/Destination1.png';
import Destination2 from '../assets/Destination2.png';
import Destination3 from '../assets/Destination3.png';
import Destination4 from '../assets/Destination4.png';
import Destination5 from '../assets/Destination5.png';
import Destination6 from '../assets/Destination6.png';
import './Recommend.css'
import info1 from '../assets/info1.png'
import info2 from '../assets/info2.png'
import info3 from '../assets/info3.png'



function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
      distance:'2340km',
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country.",
      cost: "54,200",
      duration: "Approx 2 night trip",
      distance:'3340km',

    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city.",
      cost: "45,500",
      duration: "Approx 2 night trip",
      distance:'4340km',

    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
      distance:'5340km',

    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      distance:'6435km',
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      distance:'1240km',
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  const [active,setActive]=useState(1)

  return (
    <section id="recommend">
        <div className="title1`">
          <h2>Recommended Destination</h2>
        </div>
        <div className="packages1">
          <ul className='unli'>
              {
                packages.map((pack,index)=>{
                  return(
                    <li className={active===index+1?'active':''} 
                    onClick={()=>setActive(index+1)}>
                    {pack}
                    </li>
                  )
                })
              }
          </ul>
        </div>
    <div className='destinations'>
      {
        data.map((dataa)=>{
          return(
            <div className='destination'>
              <img src={dataa.image} alt=''></img>
              <h3>{dataa.title}</h3>
              <p>{dataa.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img className='imgg' src={info1} alt="" />
                  <img className='imgg' src={info2} alt="" />
                  <img className='imgg' src={info3} alt="" />
                </div>
                <h4><span>&#8377;</span>{dataa.cost}</h4>
              </div>
              <div className="distance">
                <span>{dataa.distance}</span>
                <span>{dataa.duration}</span>
              </div>
          </div>
          )
        })
      }
    </div>

    </section>
    
  )
}

export default Recommend
