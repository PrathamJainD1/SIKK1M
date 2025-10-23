import React, { useState } from 'react';
import './Map.css';

const Map = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const touristSpots = [
    {
      id: 1,
      name: "Rumtek Monastery",
      type: "monastery",
      location: "Gangtok",
      coordinates: { x: 68, y: 45 }, // Gangtok area - more specific for Rumtek
      description: "One of the most significant monasteries in Sikkim, seat of Karma Kagyu lineage",
      bestTime: "Mar-Jun",
      highlights: ["Golden Stupa", "Main Prayer Hall", "Monks' College"],
      image: "/images/rumtek-monastery.jpg"
    },
    {
      id: 2,
      name: "Tsomgo Lake",
      type: "nature",
      location: "East Sikkim", 
      coordinates: { x: 78, y: 42 },
      description: "Glacial lake at 12,400 ft known for its pristine beauty and migratory birds",
      bestTime: "Mar-May",
      highlights: ["Boat Riding", "Yak Rides", "Snow Views"],
      image: "/images/tsongmo.jpg"
    },
    {
      id: 3,
      name: "Nathula Pass",
      type: "adventure",
      location: "India-China Border",
      coordinates: { x: 82, y: 35 },
      description: "Mountain pass at 14,140 ft connecting India and Tibet, historic Silk Route",
      bestTime: "May-Nov",
      highlights: ["Border View", "War Memorial", "High Altitude"],
      image: "/images/nathula-map.jpg"
    },
    {
      id: 4,
      name: "Pemayangtse Monastery",
      type: "monastery",
      location: "Pelling",
      coordinates: { x: 35, y: 52 }, // West Sikkim near Pelling
      description: "One of Sikkim's oldest monasteries with seven-tiered wooden structure",
      bestTime: "Oct-Dec", 
      highlights: ["Sangthokpalri", "Ancient Scriptures", "Kanchenjunga View"],
      image: "/images/pemayangtse-monastery.jpg"
    },
    {
      id: 5,
      name: "Yumthang Valley",
      type: "nature",
      location: "North Sikkim",
      coordinates: { x: 58, y: 18 },
      description: "Valley of Flowers with hot springs and rhododendron forests",
      bestTime: "Feb-Jun",
      highlights: ["Flower Bloom", "Hot Springs", "Shingba Rhododendron Sanctuary"],
      image: "/images/yumthang-map.jpg"
    },
    {
      id: 6,
      name: "MG Marg Gangtok",
      type: "shopping",
      location: "Gangtok",
      coordinates: { x: 70, y: 48 }, // Center of Gangtok city
      description: "Pedestrian-only promenade with shops, cafes, and cultural performances",
      bestTime: "Year-round",
      highlights: ["Local Crafts", "Food Stalls", "Cultural Shows"],
      image: "/images/mg-marg-map.jpg"
    },
    {
      id: 7,
      name: "Kanchenjunga Base Camp",
      type: "adventure", 
      location: "West Sikkim",
      coordinates: { x: 28, y: 30 },
      description: "Trekking destination offering closest views of world's third highest peak",
      bestTime: "Apr-May, Sep-Oct",
      highlights: ["Trekking", "Mountain Views", "Alpine Forests"],
      image: "/images/kanchenjunga-map.jpg"
    },
    {
      id: 8,
      name: "Enchey Monastery",
      type: "monastery",
      location: "Gangtok", 
      coordinates: { x: 72, y: 46 }, // Gangtok area - different from Rumtek
      description: "200-year-old monastery known for its annual Chaam dances",
      bestTime: "Mar-Oct",
      highlights: ["Chaam Dances", "Ancient Murals", "City Views"],
      image: "/images/enchey.jpg"
    },
    {
      id: 9,
      name: "Lachung",
      type: "nature",
      location: "North Sikkim",
      coordinates: { x: 62, y: 25 },
      description: "Picturesque village serving as gateway to Yumthang Valley",
      bestTime: "Mar-Jun",
      highlights: ["Lachung Monastery", "River Teesta", "Snow Views"],
      image: "/images/lachung.jpg"
    },
    {
      id: 10,
      name: "Lachen",
      type: "nature",
      location: "North Sikkim",
      coordinates: { x: 55, y: 22 },
      description: "Base village for Gurudongmar Lake and Thangu Valley",
      bestTime: "Apr-Oct",
      highlights: ["Lachen Monastery", "Alpine Views", "Trekking Base"],
      image: "/images/lachen.jpg"
    },
    {
      id: 11,
      name: "Pelling",
      type: "nature",
      location: "West Sikkim",
      coordinates: { x: 38, y: 55 },
      description: "Hill station with spectacular views of Kanchenjunga range",
      bestTime: "Oct-Jun",
      highlights: ["Kanchenjunga Views", "Sky Walk", "Waterfalls"],
      image: "/images/pelling.jpg"
    },
    {
      id: 12,
      name: "Ravangla",
      type: "nature",
      location: "South Sikkim",
      coordinates: { x: 52, y: 65 },
      description: "Scenic town with Buddha Park and mountain views",
      bestTime: "Mar-Jun, Sep-Dec",
      highlights: ["Buddha Park", "Tendong Hill", "Monasteries"],
      image: "/images/ravangla.jpg"
    },
    {
      id: 13,
      name: "Tashiding Monastery",
      type: "monastery",
      location: "West Sikkim",
      coordinates: { x: 32, y: 58 },
      description: "Sacred monastery considered one of Sikkim's most holy sites",
      bestTime: "Mar-Oct",
      highlights: ["Holy Stupas", "Mountain Views", "Spiritual Atmosphere"],
      image: "/images/tashiding.jpg"
    },
    {
      id: 14,
      name: "Namchi",
      type: "cultural",
      location: "South Sikkim",
      coordinates: { x: 48, y: 68 },
      description: "Town known for Char Dham and Samdruptse statue",
      bestTime: "Oct-Apr",
      highlights: ["Char Dham", "Samdruptse", "Gardens"],
      image: "/images/namchi.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Places', icon: '📍', count: touristSpots.length },
    { id: 'monastery', name: 'Monasteries', icon: '🕌', count: touristSpots.filter(spot => spot.type === 'monastery').length },
    { id: 'nature', name: 'Nature', icon: '🏞️', count: touristSpots.filter(spot => spot.type === 'nature').length },
    { id: 'adventure', name: 'Adventure', icon: '🥾', count: touristSpots.filter(spot => spot.type === 'adventure').length },
    { id: 'shopping', name: 'Shopping', icon: '🛍️', count: touristSpots.filter(spot => spot.type === 'shopping').length },
    { id: 'cultural', name: 'Cultural', icon: '🎭', count: touristSpots.filter(spot => spot.type === 'cultural').length }
  ];

  const filteredSpots = selectedCategory === 'all' 
    ? touristSpots 
    : touristSpots.filter(spot => spot.type === selectedCategory);

  const getTypeColor = (type) => {
    const colors = {
      monastery: '#8B4513',
      nature: '#2c5530', 
      adventure: '#4a6fa5',
      shopping: '#A0522D',
      cultural: '#6f42c1'
    };
    return colors[type] || '#666';
  };

  return (
    <div className="map-section">
      {/* Hero Section */}
      <div className="map-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Explore Sikkim's Treasures</h1>
          <p>Interactive map showing must-visit destinations across the Himalayan kingdom</p>
        </div>
      </div>

      <div className="map-container">
        <div className="container">
          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="interactive-map">
            <div className="map-background">
              {/* Sikkim Map Image */}
              <div className="sikkim-map-image">
                <img 
                  src="/images/sikkim-map.jpg" 
                  alt="Sikkim Map" 
                  className="map-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                {/* Fallback outline in case image fails to load */}
                <div className="map-fallback" style={{display: 'none'}}>
                  <div className="sikkim-outline">
                    <div className="fallback-text">Sikkim Map</div>
                  </div>
                </div>
                
                {/* Map Points - All locations including Rumtek, Pemayangtse, and MG Marg */}
                {filteredSpots.map(spot => (
                  <div
                    key={spot.id}
                    className="map-point"
                    style={{
                      left: `${spot.coordinates.x}%`,
                      top: `${spot.coordinates.y}%`,
                      backgroundColor: getTypeColor(spot.type)
                    }}
                    onClick={() => setSelectedLocation(spot)}
                    title={spot.name}
                  >
                    <div className="point-pulse"></div>
                    <div className="point-tooltip">{spot.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Details Panel */}
            <div className="location-panel">
              {selectedLocation ? (
                <div className="location-details">
                  <button 
                    className="close-panel"
                    onClick={() => setSelectedLocation(null)}
                  >
                    ×
                  </button>
                  <div className="location-header">
                    <h3>{selectedLocation.name}</h3>
                    <span 
                      className="location-type"
                      style={{ backgroundColor: getTypeColor(selectedLocation.type) }}
                    >
                      {selectedLocation.type}
                    </span>
                  </div>
                  <div className="location-image">
                    <img 
                      src={selectedLocation.image} 
                      alt={selectedLocation.name}
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23666'%3E{selectedLocation.name}%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="location-info">
                    <div className="info-item">
                      <strong>📍 Location:</strong> {selectedLocation.location}
                    </div>
                    <div className="info-item">
                      <strong>📅 Best Time:</strong> {selectedLocation.bestTime}
                    </div>
                    <p className="location-description">{selectedLocation.description}</p>
                    <div className="highlights">
                      <strong>✨ Highlights:</strong>
                      <div className="highlight-tags">
                        {selectedLocation.highlights.map((highlight, index) => (
                          <span key={index} className="highlight-tag">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="location-actions">
                    <button className="action-btn primary">View Details</button>
                    <button className="action-btn secondary">Get Directions</button>
                  </div>
                </div>
              ) : (
                <div className="panel-placeholder">
                  <div className="placeholder-icon">🗺️</div>
                  <h3>Select a Location</h3>
                  <p>Click on any point on the map to view details about that destination</p>
                  <div className="location-count">
                    <strong>{filteredSpots.length}</strong> locations found
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="map-stats">
            <div className="stat-card">
              <div className="stat-number">{touristSpots.length}+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7,096m</div>
              <div className="stat-label">Highest Point</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Year</div>
              <div className="stat-label">Round Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;