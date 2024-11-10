import React, { useEffect } from 'react';
import pre_loader2 from '../images/pre_laoder_video1.mp4';

const Loader = () => {
  
  // Dynamically load the night-sky script
  useEffect(() => {
  if (!customElements.get('night-sky')) {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }
}, []);


  return (
    <div style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100vw', 
      margin: '0', 
      padding: '0', 
      overflow: 'hidden'
    }}>
      {/* The starry background */}
      <night-sky 
        id="nightSky"
        layers="4"
        density="30"
        velocity-x="60"
        velocity-y="60"
        star-color="#FFF"
        background-color="black"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 1 // Ensure it is behind the video
        }}
      ></night-sky>

      {/* The video loader */}
      <video 
        src={pre_loader2}
        alt="preloader" 
        autoPlay 
        loop 
        muted 
        style={{ 
            opacity:'0.6',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh', 
          width: '100vw',
          zIndex: 2 // Ensure the video is in front of the background
        }} 
      />
    </div>
  );
};

export default Loader;
