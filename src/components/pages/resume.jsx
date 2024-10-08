import React from 'react'
import resume1 from '../../assets/resumes/resume.pdf'
import { Worker , Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/animatedArrow.json';


const resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
        // Customize this object to hide certain toolbar buttons
        hide: ['openFile', 'download', 'print'] // Example: Hides the open file, download, and print buttons
    },
});
  return (
    <div>
    <div className="pdf-viewer-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="pdf-viewer-wrapper">
                    <Viewer 
                        fileUrl={resume1}
                        plugins={[defaultLayoutPluginInstance]} 
                    />
                </div>
            </Worker>
        </div>
        <Lottie animationData={animationData} className='arrow'/>
    <div>
      <button className='download'>
        <a href={resume1} download={'resume1'} className='res'>
             Download My Resume
        </a>
      </button>
    </div>
    </div>
  )
}

export default resume
