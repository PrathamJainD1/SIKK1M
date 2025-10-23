import React from 'react';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '🏔️',
      title: 'Majestic Landscapes',
      description: 'Discover the breathtaking beauty of Himalayan peaks, pristine lakes, and lush valleys'
    },
    {
      icon: '🕌',
      title: 'Sacred Monasteries',
      description: 'Explore ancient Buddhist monasteries rich in spiritual heritage and architecture'
    },
    {
      icon: '🎭',
      title: 'Rich Culture',
      description: 'Immerse yourself in vibrant festivals, traditions, and local customs'
    },
    {
      icon: '🍜',
      title: 'Authentic Cuisine',
      description: 'Savor traditional Sikkimese dishes and unique Himalayan flavors'
    }
  ];

  const stats = [
    { number: '200+', label: 'Sacred Sites' },
    { number: '50+', label: 'Monasteries' },
    { number: '8,586m', label: 'Highest Peak' },
    { number: '4', label: 'Main Seasons' }
  ];

  return (
    <div className="home-section">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Sikkim</h1>
            <h2>The Land of Mystical Mountains & Spiritual Serenity</h2>
            <p>Embark on a journey through India's hidden gem, where ancient monasteries meet breathtaking Himalayan landscapes</p>
            <div className="hero-buttons">
              <button className="cta-button primary">Start Your Journey</button>
              <button className="cta-button secondary">Virtual Tours</button>
            </div>
          </div>
          <div className="weather-widget">
            <div className="weather-card">
              <div className="weather-icon">⛅</div>
              <div className="weather-info">
                <div className="temperature">27°C</div>
                <div className="condition">Mostly Cloudy</div>
                <div className="location">Gangtok, Sikkim</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Visit Sikkim?</h2>
            <p>Experience the perfect blend of natural beauty, spiritual enlightenment, and cultural richness</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Highlights */}
      <div className="cultural-section">
        <div className="container">
          <div className="cultural-content">
            <div className="cultural-text">
              <h2>Spiritual Heritage</h2>
              <p>Sikkim is home to over 200 monasteries representing different Buddhist traditions. From the majestic Rumtek to the ancient Pemayangtse, each monastery tells a story of spiritual devotion and architectural brilliance.</p>
              <ul className="cultural-list">
                <li>🏯 Buddhist Monasteries & Stupas</li>
                <li>🎭 Traditional Cham Dances</li>
                <li>📜 Ancient Scriptures & Thangkas</li>
                <li>🕉️ Yoga & Meditation Retreats</li>
              </ul>
              <button className="explore-button">Explore Culture</button>
            </div>
            <div className="cultural-image">
              <div className="image-placeholder">
                <span></span>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore Sikkim?</h2>
            <p>Begin your spiritual journey through the Himalayas with our interactive guides and virtual tours</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Plan Your Trip</button>
              <button className="cta-btn secondary">Talk to Monk Guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;