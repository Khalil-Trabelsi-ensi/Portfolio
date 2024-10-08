import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animated1.json';
import Typed from './Typed';
import pic from '../../assets/img/profilepic.jpg';
import Tilt from 'react-parallax-tilt';
const Home = () => {
  return (
    <div>
    <div className='HomePage'>
    <div className='HomeText'>
    <h1>Hi There!</h1>
    <h1>I'M <b>KHALIL TRABELSI</b></h1>
    <Typed/> 
    </div>
    <Lottie animationData={animationData} className='illustration'/>
    </div>
    <div className='AboutPage'>
    <div className='AboutText'>
          <div className='child'>
          <h1 className='AboutTextHeading'><b>About Me</b></h1>
          <p>
            Welcome to my portfolio! I am a Computer Science Engineer at ENSI, where I am honing <br/> 
            my skills and expanding my knowledge in the field. <br/><br/>
            I am driven by a passion for technology and a desire to create 
            impactful solutions that improve lives.<br /><br />
            As an ambitious and motivated individual, I thrive on new challenges <br/>
            and am always eager to learn and grow.
            <br /><br />  
          </p>
          </div>
          <div className='child'>
          <Tilt>
          <img src={pic} alt="Myself" className='AboutImage' />
          </Tilt>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default Home
