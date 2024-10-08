import React from 'react'
import Skillfun from './skillfun';

const Skills = () => {
  return (
    <div>
     <h1 className='SkillsHeading'>Professional Skillset</h1>
     <div className='skills'>
     <Skillfun skill='C++'/>
     <Skillfun skill='Postman'/>
     <Skillfun skill='React'/>
     <Skillfun skill='Javascript'/>
     <Skillfun skill='Node'/>
     <Skillfun skill='Express'/>
     <Skillfun skill='MongoDb'/>
     <Skillfun skill='Python'/>
     <Skillfun skill='Git'/>
     <Skillfun skill='Github'/>
     <Skillfun skill='Npm'/>
     <Skillfun skill='Bootstrap'/>
     <Skillfun skill='Vercel'/>
    </div>
    </div>
  )
}


export default Skills
