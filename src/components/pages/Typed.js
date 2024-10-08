import React from 'react';
import Typewriter from  'typewriter-effect';
/*create a script to show */
const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Computer Science engineer', 'MERN Stack Developer','Cybersecurity Specialist'],/*The text alternates */
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed
