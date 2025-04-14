// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // Wait 3 seconds before finishing the splash screen
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <video autoPlay muted loop className="splash-video">
        <source src="/path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="splash-overlay">
        <h1>Welcome to ArtGal</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
