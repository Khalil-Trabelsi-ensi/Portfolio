import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub , FaInstagram } from "react-icons/fa";
  
const footer = () => {
  return (
    <footer>
      <h4>Khalil Trabelsi</h4>
      <h4>Portfolio 2025</h4>
      <div className='footerLinks'>
      <a href="https://www.linkedin.com/in/khalil-trabelsi-ba8428283/" target='blank'><CiLinkedin/></a>
      <a href="https://github.com/Khalil-Trabelsi-ensi" target='blank'><FaGithub/></a>
      <a href="https://www.instagram.com/khalil_.trabelsi/" target='blank'><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default footer
