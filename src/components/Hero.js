import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

// Placeholder images (replace with actual artwork images)
const slides = [
  {
    image: 'https://via.placeholder.com/1200x600.png?text=Artwork+1',
    title: 'Discover Original Art at ArtGal',
    cta: 'Explore Now',
  },
  {
    image: 'https://via.placeholder.com/1200x600.png?text=Artwork+2',
    title: 'Find Your Perfect Piece',
    cta: 'Shop Now',
  },
  {
    image: 'https://via.placeholder.com/1200x600.png?text=Artwork+3',
    title: 'Support Emerging Arts',
    cta: 'Browse Collections',
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-overlay">
              <h1 className="hero-title">{slide.title}</h1>
              <button className="hero-cta">{slide.cta}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
