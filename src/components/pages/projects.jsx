import { React, useRef } from 'react';
import Auto from '../../assets/img/autoinvestor/Auto.png';
import Binancelink from '../../assets/img/autoinvestor/binancelink.png';
import Packages from '../../assets/img/autoinvestor/packages.png';
import login from '../../assets/img/autoinvestor/login.png';
import payment from '../../assets/img/autoinvestor/payment.png';
import certif from '../../assets/img/cybersec/certif generator .png';
import hra from '../../assets/img/cybersec/HRA app.png';
import edsn from '../../assets/img/cybersec/EDSN.png';
import biat1 from '../../assets/img/biat/communique-financier.png';
import biat2 from '../../assets/img/biat/dbeaver.png';

import { FaReact, FaPython, FaExpeditedssl ,FaGitlab } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { SiExpress, SiMongodb,SiPowerbi,SiApache,SiPowershell } from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { BiLogoPostgresql } from "react-icons/bi";


const Projects = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const imagesauto = [Auto, Binancelink, login, Packages, payment];
  const imagescyber = [certif, hra, edsn];
  const imagesbiat = [biat1, biat2];

  const prev1 = () => {
    if (imageRef1.current) {
      imageRef1.current.scrollLeft -= 246;
    }
  };
  const next1 = () => {
    if (imageRef1.current) {
      imageRef1.current.scrollLeft += 246;
    }
  };
  const prev2 = () => {
    if (imageRef2.current) {
      imageRef2.current.scrollLeft -= 246;
    }
  };
  const next2 = () => {
    if (imageRef2.current) {
      imageRef2.current.scrollLeft += 246;
    }
  };
  const prev3 = () => {
    if (imageRef3.current) {
      imageRef3.current.scrollLeft -= 246;
    }
  };
  const next3 = () => {
    if (imageRef3.current) {
      imageRef3.current.scrollLeft += 246;
    }
  };

  return (
    <div className='projects'>
      <div className='project-box'>
        <h3 title='Company Name : SopraHr'>Security Engineer Internship</h3>
        <div className='image-container'>
          <div className='previous' onClick={prev2}>
            <GrFormPrevious />
          </div>
          <div className='images' ref={imageRef2}>
            {imagescyber.map((image1, index) => (
              <img key={index} src={image1} alt='cybersec' />
            ))}
          </div>
          <div className='next' onClick={next2}>
            <MdNavigateNext />
          </div>
        </div>
        <p>
          - Implemented end-to-end encryption for web applications for the client Auchan, ensuring user data
          protection.
          <br />
          <br />
          - Configured SSL certificates to secure communications.
          <br />
          <br />
          - Set up and configured Apache servers to host web applications.
          <br />
          <br />
          - Utilized Linux systems for server infrastructure.
        </p>
        <div className='techused'>
          <h3>Technologies Used :</h3>
          <ul className='tech-list'>
            <li>
              - Apache <SiApache/>
            </li>
            <li>
              - GitLab <FaGitlab />
            </li>
            <li>
              - SSL Encryption <FaExpeditedssl/>
            </li>
            <li>
              - Powershell <SiPowershell  />
            </li>
          </ul>
        </div>
      </div>
      <div className='project-box'>
        <h3 title='Personal Project'>Auto-Investor</h3>
        <div className='image-container'>
          <div className='previous' onClick={prev1}>
            <GrFormPrevious />
          </div>
          <div className='images' ref={imageRef1}>
            {imagesauto.map((image, index) => (
              <img key={index} src={image} alt='cybersec' />
            ))}
          </div>
          <div className='next' onClick={next1}>
            <MdNavigateNext />
          </div>
        </div>
        <p>
          - Developed a platform to facilitate trading for new traders.
          <br />
          <br />
          - Used the MERN stack (MongoDB, Express, React, Node.js) for backend and frontend management.
          <br />
          <br />
          - Developed risk management and portfolio management features to optimize investment strategies.
          <br />
          <br />
          - Collaborated using GitHub for version control and team project management.
        </p>
        <div className='techused'>
          <h3>Technologies Used :</h3>
          <ul className='tech-list'>
            <li>
              - JavaScript (React, Node.js) <FaReact /> <DiNodejs />
            </li>
            <li>
              - MongoDB <SiMongodb />
            </li>
            <li>
              - Express.js <SiExpress />
            </li>
            <li>
              - SQL (DBeaver) <BsFiletypeSql />
            </li>
          </ul>
        </div>
      </div>
      <div className='project-box'>
        <h3 title='Company Name : BIAT'>Database Optimization</h3>
        <div className='image-container'>
          <div className='previous' onClick={prev3}>
            <GrFormPrevious />
          </div>
          <div className='images' ref={imageRef3}>
            {imagesbiat.map((image3, index) => (
              <img key={index} src={image3} alt='biat' />
            ))}
          </div>
          <div className='next' onClick={next3}>
            <MdNavigateNext />
          </div>
        </div>
        <p>
          - Designed, developed, and implemented an efficient data management solution.
          <br />
          <br />
          - Conducted in-depth analyses and presented results using Power BI.
          <br />
          <br />
          - Managed the database using DBeaver for SQL queries and data management.
        </p>
        <div className='techused'>
          <h3>Technologies Used :</h3>
          <ul className='tech-list'>
            <li>
              - Python  <FaPython/>
            </li>
            <li>
              - Powerbi  <SiPowerbi/>
            </li>
            <li>
              - DBeaver <BiLogoPostgresql/>
            </li>
            <li>
              - SQL (DBeaver) <BsFiletypeSql />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
