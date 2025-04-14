import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen'; // Make sure this path is correct
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <FeaturedCollections />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
