import React from 'react';
import './Festivals.css';

const Festivals = () => {
  const majorFestivals = [
    {
      id: 1,
      name: "Losar",
      type: "Tibetan New Year",
      image: "/images/losar.jpg",
      description: "The Tibetan New Year celebration marking the beginning of the lunar calendar, celebrated with great enthusiasm across Sikkim.",
      duration: "15 days",
      month: "February/March",
      significance: "Welcoming new year, driving away evil spirits, and praying for prosperity",
      activities: [
        "Traditional Cham dances",
        "Butter lamp lighting",
        "Family gatherings",
        "Special prayers in monasteries",
        "Traditional feasts"
      ],
      highlights: ["Mask dances", "Butter sculptures", "Traditional music", "Religious ceremonies"]
    },
    {
      id: 2,
      name: "Saga Dawa",
      type: "Buddhist Festival",
      image: "/images/saga-dawa.jpg",
      description: "Triple blessed festival commemorating Buddha's birth, enlightenment, and parinirvana. The most sacred Buddhist festival.",
      duration: "1 month",
      month: "May/June",
      significance: "Celebrating Buddha's life events and practicing generosity",
      activities: [
        "Prayer flag hoisting",
        "Circumambulation of holy sites",
        "Butter lamp offerings",
        "Acting of moral precepts",
        "Charity and donations"
      ],
      highlights: ["Processions", "Prayer ceremonies", "Community service", "Religious discourses"]
    },
    {
      id: 3,
      name: "Dasain",
      type: "Hindu Festival",
      image: "/images/dasain.jpg",
      description: "The greatest Hindu festival celebrating the victory of good over evil, particularly popular among Nepali community.",
      duration: "15 days",
      month: "September/October",
      significance: "Victory of Goddess Durga over demon Mahishasura",
      activities: [
        "Ghatasthapana (sowing barley)",
        "Fulpati (flower offerings)",
        "Maha Astami animal sacrifices",
        "Tika and jamara blessing",
        "Family reunions"
      ],
      highlights: ["Tika ceremony", "Traditional swings", "Family gatherings", "Cultural programs"]
    },
    {
      id: 4,
      name: "Tihar",
      type: "Festival of Lights",
      image: "/images/tihar.jpg",
      description: "Five-day Hindu festival of lights celebrating human-animal relationships and worshipping different deities each day.",
      duration: "5 days",
      month: "October/November",
      significance: "Worshipping different aspects of life and relationships",
      activities: [
        "Kag Tihar (crow worship)",
        "Kukur Tihar (dog worship)",
        "Gai Tihar (cow worship)",
        "Laxmi Puja (goddess of wealth)",
        "Bhai Tika (brother-sister bond)"
      ],
      highlights: ["Oil lamps", "Flower decorations", "Deusi-Bhailo songs", "Brother-sister bonding"]
    }
  ];

  const buddhistFestivals = [
    {
      id: 1,
      name: "Bumchu",
      type: "Sacred Water Festival",
      image: "/images/bumchu.jpg",
      description: "Unique festival at Tashiding Monastery where sacred water from a sealed vessel predicts the year's fortune.",
      location: "Tashiding Monastery",
      significance: "Predicting annual fortunes through sacred water level",
      rituals: [
        "Opening sealed vessel",
        "Water level observation",
        "Blessing distribution",
        "Prayer ceremonies"
      ],
      uniqueFeature: "The water level predicts agricultural yield and political stability"
    },
    {
      id: 2,
      name: "Pang Lhabsol",
      type: "Warrior God Festival",
      image: "/images/pang-lhabsol.jpg",
      description: "Unique Sikkimese festival worshipping Mount Kanchenjunga as the guardian deity and celebrating the blood-brotherhood treaty.",
      location: "Various monasteries",
      significance: "Worshipping Kanchenjunga and commemorating historical treaty",
      rituals: [
        "Masked dances",
        "Warrior god invocation",
        "Traditional offerings",
        "Cultural performances"
      ],
      uniqueFeature: "Only festival where Mount Kanchenjunga is worshipped as a deity"
    },
    {
      id: 3,
      name: "Lhabab Duechen",
      type: "Buddha's Descent",
      image: "/images/lhabab-duechen.jpg",
      description: "Celebrates Buddha's return to earth from heaven after teaching his mother and other celestial beings.",
      location: "All monasteries",
      significance: "Commemorating Buddha's return to earthly realm",
      rituals: [
        "Butter lamp offerings",
        "Scripture readings",
        "Prayer ceremonies",
        "Merit-making activities"
      ],
      uniqueFeature: "Celebrates Buddha's compassion in teaching celestial beings"
    }
  ];

  const culturalFestivals = [
    {
      id: 1,
      name: "Maghe Sankranti",
      type: "Harvest Festival",
      image: "/images/maghe-sankranti.jpg",
      description: "Makar Sankranti celebration marking the sun's transition into Capricorn and the beginning of warmer days.",
      community: "Nepali Community",
      significance: "Winter solstice celebration and thanksgiving",
      traditions: [
        "Holy river bathing",
        "Sesame seed sweets",
        "Family feasts",
        "Charity activities"
      ],
      food: ["Til ko laddu", "Chaku", "Ghee", "Sweet potatoes"]
    },
    {
      id: 2,
      name: "Sonam Lochar",
      type: "Tamang New Year",
      image: "/images/sonam-lochar.jpg",
      description: "Tamang community's new year celebration with traditional dances, music, and cultural programs.",
      community: "Tamang Community",
      significance: "Tamang lunar new year celebration",
      traditions: [
        "Traditional Tamang selo dance",
        "Damphu drum performances",
        "Cultural programs",
        "Community feasts"
      ],
      food: ["Sel roti", "Alu tama", "Kwati", "Traditional alcohol"]
    },
    {
      id: 3,
      name: "Tendong Lho Rum Faat",
      type: "Lepcha Festival",
      image: "/images/tendong-festival.jpg",
      description: "Lepcha community's prayer festival for peace and prosperity, offering gratitude to nature and deities.",
      community: "Lepcha Community",
      significance: "Thanksgiving to nature and prayer for welfare",
      traditions: [
        "Nature worship",
        "Traditional prayers",
        "Cultural performances",
        "Community gatherings"
      ],
      food: ["Traditional Lepcha cuisine", "Local beverages", "Community feast"]
    }
  ];

  const seasonalFestivals = [
    {
      id: 1,
      name: "Flower Festival",
      type: "Spring Celebration",
      image: "/images/flower-festival.jpg",
      description: "Celebration of Sikkim's rich floral biodiversity, particularly the blooming of rhododendrons and orchids.",
      season: "Spring (March-April)",
      location: "Various locations",
      features: [
        "Flower exhibitions",
        "Gardening competitions",
        "Nature walks",
        "Cultural programs"
      ],
      highlight: "Display of 400+ rhododendron species"
    },
    {
      id: 2,
      name: "Winter Festival",
      type: "Tourism Festival",
      image: "/images/winter-festival.jpg",
      description: "Promotion of winter tourism with adventure sports, cultural events, and local product exhibitions.",
      season: "Winter (December-January)",
      location: "Gangtok and other towns",
      features: [
        "Adventure sports",
        "Local handicraft exhibitions",
        "Food festivals",
        "Music concerts"
      ],
      highlight: "Snow sports and local cuisine"
    },
    {
      id: 3,
      name: "Food & Culture Festival",
      type: "Culinary Festival",
      image: "/images/food-festival.jpg",
      description: "Showcasing Sikkim's diverse culinary traditions and cultural heritage through food and performances.",
      season: "Autumn (October)",
      location: "MG Marg, Gangtok",
      features: [
        "Local cuisine stalls",
        "Cooking demonstrations",
        "Cultural performances",
        "Handicraft exhibitions"
      ],
      highlight: "Traditional Sikkimese momos and thukpa"
    }
  ];

  return (
    <div className="festivals-section">
      {/* Hero Section */}
      <div className="festivals-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Festivals of Sikkim</h1>
          <p>Experience the vibrant cultural tapestry through Sikkim's diverse festivals and celebrations</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction-section">
        <div className="container">
          <div className="intro-content">
            <h2>Celebrating Cultural Harmony</h2>
            <p>
              Sikkim's festival calendar reflects the state's rich cultural diversity and religious harmony. 
              From ancient Buddhist ceremonies to vibrant Hindu celebrations and indigenous tribal festivals, 
              each event showcases unique traditions, colorful rituals, and warm hospitality that define 
              Sikkim's cultural identity.
            </p>
            <div className="festival-features">
              <div className="feature">
                <span className="feature-icon">🕉️</span>
                <h4>Religious Diversity</h4>
                <p>Buddhist, Hindu, and indigenous celebrations</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎭</span>
                <h4>Cultural Richness</h4>
                <p>Traditional dances, music, and rituals</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🍛</span>
                <h4>Culinary Delights</h4>
                <p>Special festival foods and traditional cuisine</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <h4>Community Bonding</h4>
                <p>Strengthening social ties and cultural exchange</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Major Festivals */}
      <div className="major-festivals-section">
        <div className="container">
          <div className="section-header">
            <h2>Major Festivals</h2>
            <p>The most significant celebrations that define Sikkim's cultural landscape</p>
          </div>

          <div className="festivals-grid">
            {majorFestivals.map(festival => (
              <div key={festival.id} className="festival-card major">
                <div className="festival-image">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23666'%3EFestival Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="festival-badge">{festival.type}</div>
                </div>
                <div className="festival-content">
                  <div className="festival-header">
                    <h3>{festival.name}</h3>
                    <div className="festival-meta">
                      <span className="duration">📅 {festival.duration}</span>
                      <span className="month">🗓️ {festival.month}</span>
                    </div>
                  </div>
                  <p className="festival-description">{festival.description}</p>
                  
                  <div className="significance-box">
                    <strong>Significance:</strong> {festival.significance}
                  </div>

                  <div className="activities-section">
                    <h4>Main Activities:</h4>
                    <div className="activities-list">
                      {festival.activities.map((activity, index) => (
                        <span key={index} className="activity-tag">{activity}</span>
                      ))}
                    </div>
                  </div>

                  <div className="highlights-section">
                    <h4>Festival Highlights:</h4>
                    <div className="highlights-list">
                      {festival.highlights.map((highlight, index) => (
                        <span key={index} className="highlight-tag">⭐ {highlight}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buddhist Festivals */}
      <div className="buddhist-festivals-section">
        <div className="container">
          <div className="section-header">
            <h2>Buddhist Festivals</h2>
            <p>Sacred celebrations rooted in Tibetan Buddhist traditions</p>
          </div>

          <div className="buddhist-grid">
            {buddhistFestivals.map(festival => (
              <div key={festival.id} className="festival-card buddhist">
                <div className="festival-image">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='200' viewBox='0 0 350 200'%3E%3Crect width='350' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3EBuddhist Festival%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="festival-content">
                  <h3>{festival.name}</h3>
                  <span className="festival-type">{festival.type}</span>
                  <p className="festival-description">{festival.description}</p>
                  
                  <div className="festival-details">
                    <div className="detail-item">
                      <strong>📍 Location:</strong> {festival.location}
                    </div>
                    <div className="detail-item">
                      <strong>🙏 Significance:</strong> {festival.significance}
                    </div>
                  </div>

                  <div className="rituals-section">
                    <h4>Main Rituals:</h4>
                    <div className="rituals-list">
                      {festival.rituals.map((ritual, index) => (
                        <span key={index} className="ritual-tag">{ritual}</span>
                      ))}
                    </div>
                  </div>

                  <div className="unique-feature">
                    <strong>Unique Feature:</strong> {festival.uniqueFeature}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Festivals */}
      <div className="cultural-festivals-section">
        <div className="container">
          <div className="section-header">
            <h2>Cultural & Community Festivals</h2>
            <p>Celebrations showcasing Sikkim's ethnic diversity and community traditions</p>
          </div>

          <div className="cultural-grid">
            {culturalFestivals.map(festival => (
              <div key={festival.id} className="festival-card cultural">
                <div className="festival-image">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='200' viewBox='0 0 350 200'%3E%3Crect width='350' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3ECultural Festival%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="community-badge">{festival.community}</div>
                </div>
                <div className="festival-content">
                  <h3>{festival.name}</h3>
                  <span className="festival-type">{festival.type}</span>
                  <p className="festival-description">{festival.description}</p>
                  
                  <div className="significance-box">
                    <strong>Cultural Significance:</strong> {festival.significance}
                  </div>

                  <div className="traditions-section">
                    <h4>Traditional Practices:</h4>
                    <div className="traditions-list">
                      {festival.traditions.map((tradition, index) => (
                        <span key={index} className="tradition-tag">{tradition}</span>
                      ))}
                    </div>
                  </div>

                  <div className="food-section">
                    <h4>Special Festival Foods:</h4>
                    <div className="food-list">
                      {festival.food.map((foodItem, index) => (
                        <span key={index} className="food-tag">🍽️ {foodItem}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal Festivals */}
      <div className="seasonal-festivals-section">
        <div className="container">
          <div className="section-header">
            <h2>Seasonal & Tourism Festivals</h2>
            <p>Modern festivals celebrating Sikkim's natural beauty and promoting tourism</p>
          </div>

          <div className="seasonal-grid">
            {seasonalFestivals.map(festival => (
              <div key={festival.id} className="festival-card seasonal">
                <div className="festival-image">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='200' viewBox='0 0 350 200'%3E%3Crect width='350' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3ESeasonal Festival%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="season-badge">{festival.season}</div>
                </div>
                <div className="festival-content">
                  <h3>{festival.name}</h3>
                  <span className="festival-type">{festival.type}</span>
                  <p className="festival-description">{festival.description}</p>
                  
                  <div className="festival-details">
                    <div className="detail-item">
                      <strong>📅 Season:</strong> {festival.season}
                    </div>
                    <div className="detail-item">
                      <strong>📍 Location:</strong> {festival.location}
                    </div>
                  </div>

                  <div className="features-section">
                    <h4>Main Features:</h4>
                    <div className="features-list">
                      {festival.features.map((feature, index) => (
                        <span key={index} className="feature-tag">🎯 {feature}</span>
                      ))}
                    </div>
                  </div>

                  <div className="highlight-box">
                    <strong>Main Highlight:</strong> {festival.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Festival Calendar */}
      <div className="calendar-section">
        <div className="container">
          <div className="calendar-content">
            <h2>Festival Calendar</h2>
            <div className="calendar-grid">
              <div className="calendar-item">
                <h4>January</h4>
                <ul>
                  <li>Maghe Sankranti</li>
                  <li>Republic Day Celebrations</li>
                </ul>
              </div>
              <div className="calendar-item">
                <h4>February-March</h4>
                <ul>
                  <li>Losar (Tibetan New Year)</li>
                  <li>Mahashivratri</li>
                </ul>
              </div>
              <div className="calendar-item">
                <h4>May-June</h4>
                <ul>
                  <li>Saga Dawa</li>
                  <li>Buddha Purnima</li>
                </ul>
              </div>
              <div className="calendar-item">
                <h4>September-October</h4>
                <ul>
                  <li>Dasain</li>
                  <li>Tihar</li>
                  <li>Food & Culture Festival</li>
                </ul>
              </div>
              <div className="calendar-item">
                <h4>October-November</h4>
                <ul>
                  <li>Pang Lhabsol</li>
                  <li>Lhabab Duechen</li>
                </ul>
              </div>
              <div className="calendar-item">
                <h4>December-January</h4>
                <ul>
                  <li>Winter Festival</li>
                  <li>Christmas Celebrations</li>
                  <li>New Year Events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="tips-section">
        <div className="container">
          <div className="tips-content">
            <h2>Festival Travel Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">📅</div>
                <h4>Plan Ahead</h4>
                <p>Book accommodations months in advance as festivals attract large crowds</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">👗</div>
                <h4>Dress Appropriately</h4>
                <p>Wear modest clothing when visiting monasteries and religious sites</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">📸</div>
                <h4>Respect Photography Rules</h4>
                <p>Ask permission before photographing people or religious ceremonies</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🍛</div>
                <h4>Try Local Cuisine</h4>
                <p>Festivals offer the best opportunity to taste authentic Sikkimese food</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🤝</div>
                <h4>Participate Respectfully</h4>
                <p>Join celebrations while respecting local customs and traditions</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🌧️</div>
                <h4>Weather Preparedness</h4>
                <p>Carry appropriate clothing for Sikkim's unpredictable mountain weather</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;