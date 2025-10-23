import React, { useState } from 'react';
import './Places.css';

const Places = () => {
  const [activeTour, setActiveTour] = useState(null);

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      alias: "Dharma Chakra Centre",
      description: "Rumtek Monastery, also known as the Dharma Chakra Centre, is one of the most significant and largest monasteries in Sikkim. Located 24 km from Gangtok, it serves as the main seat of the Karma Kagyu lineage outside Tibet. The monastery is renowned for its exquisite architecture, intricate murals, sacred thangkas, and ancient Buddhist scriptures. It houses precious relics including the Golden Stupa containing the remains of the 16th Karmapa. The monastery complex includes a monks' college, retreat center, and the stunning four-story main temple that stands as a magnificent example of Tibetan Buddhist architecture.",
      image: "/images/rumtek-monastery.jpg",
      tourEmbed: `
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe src="https://my.matterport.com/show/?m=6yHyQLhMih4" 
                  frameborder="0" 
                  allowfullscreen 
                  allow="xr-spatial-tracking" 
                  style="position:absolute;top:0;left:0;width:100%;height:100%;">
          </iframe>
        </div>
      `,
      tourLink: "https://sikkimdarjeelingtourism.com/rumtek-monastery/",
      features: ["Golden Stupa", "Main Prayer Hall", "Monks' College", "Retreat Center"],
      location: "24 km from Gangtok",
      founded: "1960s",
      bestTime: "March to June",
      significance: "Seat of Karma Kagyu lineage"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      alias: "The Perfect Sublime Lotus",
      description: "Pemayangtse Monastery, meaning 'The Perfect Sublime Lotus', is one of Sikkim's oldest and most important monasteries of the Nyingma sect. Founded in 1705, it sits at an altitude of 2,085 meters near Pelling with breathtaking views of the Kanchenjunga range. The monastery is famous for its seven-tiered wooden structure depicting Guru Rinpoche's heavenly abode, Sangthokpalri, crafted single-handedly by Dungzin Rinpoche. It houses ancient scriptures, sacred statues, and intricate murals depicting Buddhist mythology. Pemayangtse serves as the premier monastery where all monks of Sikkim receive their ordination.",
      image: "/images/pemayangtse-monastery.jpg",
      tourEmbed: `
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe src="https://kuula.co/share/collection/7KQHX?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" 
                  frameborder="0" 
                  allowfullscreen 
                  allow="xr-spatial-tracking" 
                  style="position:absolute;top:0;left:0;width:100%;height:100%;">
          </iframe>
        </div>
      `,
      tourLink: "https://www.tripadvisor.in/Attraction_Review-g297673-d1210226-Reviews-Pemayangtse_Monastery-Sikkim.html",
      features: ["7-tier Sangthokpalri", "Ancient Scriptures", "Nyingma Sect", "Mountain Views"],
      location: "Near Pelling, West Sikkim",
      founded: "1705",
      bestTime: "October to December",
      significance: "Oldest Nyingma monastery"
    },
    {
      id: 3,
      name: "Phensang Monastery",
      alias: "The Sky Palace",
      description: "Phensang Monastery, meaning 'The Sky Palace', is a prominent monastery of the Kagyu sect located 18 km from Gangtok on the North Sikkim Highway. Originally built in 1721 and rebuilt after a fire in 1947, the monastery is known for its unique architecture and serene atmosphere. It features a beautiful main prayer hall with stunning thangkas, statues of Buddha, and Buddhist deities. The monastery offers panoramic views of the surrounding valleys and is particularly famous for its annual Chaam dances during the Tibetan New Year. Phensang serves as an important spiritual center and provides monastic education to young lamas.",
      image: "/images/phensang-monastery.jpg",
      tourEmbed: `
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe src="https://roundme.com/embed/322341/1031795" 
                  frameborder="0" 
                  allowfullscreen 
                  allow="xr-spatial-tracking" 
                  style="position:absolute;top:0;left:0;width:100%;height:100%;">
          </iframe>
        </div>
      `,
      tourLink: "https://www.tripadvisor.in/Attraction_Review-g659796-d3705275-Reviews-Phensong_Monastery-Gangtok_East_Sikkim_Sikkim.html",
      features: ["Kagyu Sect", "Chaam Dances", "Panoramic Views", "Monastic Education"],
      location: "18 km from Gangtok",
      founded: "1721 (rebuilt 1947)",
      bestTime: "February to April",
      significance: "Sky Palace with panoramic views"
    }
  ];

  const handleTourClick = (monastery) => {
    setActiveTour(monastery);
  };

  const closeTour = () => {
    setActiveTour(null);
  };

  return (
    <div className="places-section">
      {/* 3D Tour Modal */}
      {activeTour && (
        <div className="tour-modal">
          <div className="modal-overlay" onClick={closeTour}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Virtual Tour: {activeTour.name}</h3>
              <button className="close-btn" onClick={closeTour}>×</button>
            </div>
            <div className="tour-embed">
              <div dangerouslySetInnerHTML={{ __html: activeTour.tourEmbed }} />
            </div>
            <div className="modal-actions">
              <button 
                className="external-tour-btn"
                onClick={() => window.open(activeTour.tourLink, '_blank')}
              >
                🚀 Open in Full Screen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="places-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Sacred Monasteries of Sikkim</h1>
          <p>Discover the spiritual heritage and architectural marvels of Sikkim's most revered monasteries</p>
          <div className="hero-badge">
            <span className="badge-icon">🔍</span>
            Interactive 3D Tours Available
          </div>
        </div>
      </div>

      {/* Monasteries Grid */}
      <div className="monasteries-container">
        <div className="container">
          <div className="section-header">
            <h2>Featured Monasteries</h2>
            <p>Experience the spiritual essence of Sikkim through immersive 3D virtual tours</p>
          </div>

          <div className="monasteries-grid">
            {monasteries.map((monastery) => (
              <div key={monastery.id} className="monastery-card">
                <div className="card-image">
                  <img 
                    src={monastery.image} 
                    alt={monastery.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%23666'%3EMonastery Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="card-overlay">
                    <span className="monastery-alias">{monastery.alias}</span>
                    <div className="tour-badge">3D TOUR</div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3>{monastery.name}</h3>
                    <div className="monastery-meta">
                      <span className="location">📍 {monastery.location}</span>
                      <span className="founded">🏛️ {monastery.founded}</span>
                    </div>
                  </div>

                  <p className="monastery-description">{monastery.description}</p>

                  <div className="monastery-details">
                    <div className="detail-item">
                      <strong>Best Time to Visit:</strong> {monastery.bestTime}
                    </div>
                    <div className="detail-item">
                      <strong>Significance:</strong> {monastery.significance}
                    </div>
                  </div>

                  <div className="features-list">
                    <h4>Key Features:</h4>
                    <div className="features-grid">
                      {monastery.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-actions">
                    <button 
                      className="tour-btn"
                      onClick={() => handleTourClick(monastery)}
                    >
                      <span className="btn-icon">🏔️</span>
                      Start 3D Virtual Tour
                    </button>
                    <button 
                      className="learn-more-btn"
                      onClick={() => window.open(monastery.tourLink, '_blank')}
                    >
                      Open External Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🎥</div>
              <h3>360° Virtual Experience</h3>
              <p>Explore every corner of these sacred monasteries with immersive 360-degree views</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access virtual tours on any device - desktop, tablet, or mobile phone</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🕶️</div>
              <h3>VR Compatible</h3>
              <p>Experience monasteries in virtual reality for the most immersive tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;