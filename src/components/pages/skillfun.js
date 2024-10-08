import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";


const skillfun = ({skill}) => {
   
     const skillset={
      'C++': <CgCPlusPlus/>,
      Postman: <SiPostman/>,
      React: <FaReact/>,
      Javascript: <DiJavascript1/>,
      Node : <DiNodejs/>,
      Express : <SiExpress/>,
      MongoDb : <SiMongodb/>,
      Python : <FaPython/>,
      Git : <FaGitAlt/>,
      Github : <FaGithub/>,
      Npm : <FaNpm/>,
      Bootstrap: <FaBootstrap/>,
      Vercel : <SiVercel/>
     }


  return (
    <div title={skill} className='Skills-Icons'>
          {skillset[skill]}
    </div>
  )
}

export default skillfun
