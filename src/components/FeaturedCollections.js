import React from 'react';
import './FeaturedCollections.css';

// Placeholder data (replace with actual artwork data)
const collections = [
  {
    image: 'https://via.placeholder.com/300x400.png?text=Artwork+1',
    title: 'Abstract Dreams',
    artist: 'Jane Doe',
  },
  {
    image: 'https://via.placeholder.com/300x400.png?text=Artwork+2',
    title: 'Ocean Waves',
    artist: 'Jane Doe',
  },
  {
    image: 'https://via.placeholder.com/300x400.png?text=Artwork+3',
    title: 'Urban Lights',
    artist: 'Jane Doe',
  },
  {
    image: 'https://via.placeholder.com/300x400.png?text=Artwork+4',
    title: 'Floral Serenity',
    artist: 'Jane Doe',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="featured-collections">
      <h2 className="section-title">Featured Collections</h2>
      <div className="collections-grid">
        {collections.map((item, index) => (
          <div key={index} className="collection-item">
            <img src={item.image} alt={item.title} className="collection-image" />
            <h3 className="collection-title">{item.title}</h3>
            <p className="collection-artist">by {item.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;