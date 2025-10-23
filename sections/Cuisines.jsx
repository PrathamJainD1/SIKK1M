import React from 'react';
import './Cuisines.css';

const Cuisines = () => {
  const traditionalDishes = [
    {
      id: 1,
      name: "Momos",
      image: "/images/momos.jpg",
      description: "Steamed dumplings filled with meat or vegetables, served with spicy chili sauce. A Tibetan delicacy that has become Sikkim's favorite snack.",
      ingredients: ["Flour dough", "Minced meat/vegetables", "Onions", "Garlic", "Ginger", "Spices"],
      type: "Non-Veg & Veg",
      cookingTime: "30 mins",
      popularity: "Very High"
    },
    {
      id: 2,
      name: "Thukpa",
      image: "/images/thukpa.jpg",
      description: "Hearty noodle soup with vegetables or meat, perfect for Sikkim's cold weather. A complete meal in a bowl.",
      ingredients: ["Noodles", "Vegetables/Meat", "Garlic", "Ginger", "Soy sauce", "Spring onions"],
      type: "Non-Veg & Veg",
      cookingTime: "45 mins",
      popularity: "High"
    },
    {
      id: 3,
      name: "Gundruk",
      image: "/images/gundruk.jpg",
      description: "Fermented leafy green vegetable, a traditional Nepali dish with a unique sour taste. Often served with rice.",
      ingredients: ["Fermented mustard leaves", "Tomatoes", "Onions", "Garlic", "Turmeric", "Chilies"],
      type: "Veg",
      cookingTime: "20 mins",
      popularity: "Traditional"
    },
    {
      id: 4,
      name: "Phagshapa",
      image: "/images/phagshapa.jpg",
      description: "Pork dish cooked with radishes and chilies without oil. A healthy traditional preparation.",
      ingredients: ["Pork fat", "Radish", "Dry chilies", "Chili powder", "Salt"],
      type: "Non-Veg",
      cookingTime: "60 mins",
      popularity: "Traditional"
    },
    {
      id: 5,
      name: "Sael Roti",
      image: "/images/sael-roti.jpg",
      description: "Traditional homemade, ring-shaped rice bread/doughnut. Deep-fried and often served during festivals.",
      ingredients: ["Rice flour", "Water", "Sugar", "Cardamom", "Oil for frying"],
      type: "Veg",
      cookingTime: "90 mins",
      popularity: "Festival Special"
    },
    {
      id: 6,
      name: "Chhurpi",
      image: "/images/chhurpi.jpg",
      description: "Traditional cheese made from yak milk. Comes in soft and hard varieties, often used in soups or eaten as snack.",
      ingredients: ["Yak milk", "Salt", "Traditional enzymes"],
      type: "Veg",
      cookingTime: "48 hours",
      popularity: "Local Delicacy"
    }
  ];

  const beverages = [
    {
      id: 1,
      name: "Tongba",
      image: "/images/tongba.jpg",
      description: "Traditional millet-based alcoholic beverage. Served in a wooden container with hot water.",
      type: "Alcoholic",
      serving: "Hot",
      strength: "Medium"
    },
    {
      id: 2,
      name: "Chhang",
      image: "/images/chhang.jpg",
      description: "Barley-based alcoholic drink, similar to beer. A staple in local celebrations.",
      type: "Alcoholic", 
      serving: "Cold/Hot",
      strength: "Light"
    },
    {
      id: 3,
      name: "Butter Tea",
      image: "/images/butter-tea.jpg",
      description: "Traditional Tibetan tea made with tea leaves, butter, and salt. Provides energy in cold climate.",
      type: "Non-Alcoholic",
      serving: "Hot",
      strength: "Mild"
    }
  ];

  return (
    <div className="cuisines-section">
      {/* Hero Section */}
      <div className="cuisines-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Sikkimese Cuisines</h1>
          <p>Discover the authentic flavors of Sikkim - A blend of Tibetan, Nepali, and Lepcha culinary traditions</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction-section">
        <div className="container">
          <div className="intro-content">
            <h2>Flavors of the Himalayas</h2>
            <p>
              Sikkimese cuisine reflects the state's diverse ethnic composition and cold mountain climate. 
              The food is characterized by simplicity, nutritional value, and robust flavors. Influenced by 
              Tibetan, Nepali, and Bhutia traditions, Sikkimese dishes use locally available ingredients 
              and traditional cooking methods passed down through generations.
            </p>
            <div className="cuisine-features">
              <div className="feature">
                <span className="feature-icon">🌶️</span>
                <h4>Spicy & Flavorful</h4>
                <p>Balanced use of chilies and spices</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🥬</span>
                <h4>Fresh Ingredients</h4>
                <p>Locally sourced vegetables and meats</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🏔️</span>
                <h4>Mountain Diet</h4>
                <p>Designed for high-altitude living</p>
              </div>
              <div className="feature">
                <span className="feature-icon">👑</span>
                <h4>Royal Heritage</h4>
                <p>Influenced by ancient royal kitchens</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Dishes */}
      <div className="dishes-section">
        <div className="container">
          <div className="section-header">
            <h2>Traditional Sikkimese Dishes</h2>
            <p>Must-try authentic recipes that define Sikkim's culinary identity</p>
          </div>

          <div className="dishes-grid">
            {traditionalDishes.map(dish => (
              <div key={dish.id} className="dish-card">
                <div className="dish-image">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23666'%3EDish Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="dish-type">{dish.type}</div>
                </div>
                <div className="dish-content">
                  <h3>{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  
                  <div className="dish-meta">
                    <span className="meta-item">⏱️ {dish.cookingTime}</span>
                    <span className="meta-item">⭐ {dish.popularity}</span>
                  </div>

                  <div className="ingredients">
                    <h4>Main Ingredients:</h4>
                    <div className="ingredients-list">
                      {dish.ingredients.map((ingredient, index) => (
                        <span key={index} className="ingredient-tag">{ingredient}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Beverages */}
      <div className="beverages-section">
        <div className="container">
          <div className="section-header">
            <h2>Traditional Beverages</h2>
            <p>Authentic drinks that complement Sikkimese meals and celebrations</p>
          </div>

          <div className="beverages-grid">
            {beverages.map(beverage => (
              <div key={beverage.id} className="beverage-card">
                <div className="beverage-image">
                  <img 
                    src={beverage.image} 
                    alt={beverage.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3EBeverage Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="beverage-content">
                  <h3>{beverage.name}</h3>
                  <p>{beverage.description}</p>
                  <div className="beverage-details">
                    <span className={`type-tag ${beverage.type.toLowerCase()}`}>
                      {beverage.type}
                    </span>
                    <span className="serving-tag">🍵 {beverage.serving}</span>
                    <span className="strength-tag">💪 {beverage.strength}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dining Etiquette */}
      <div className="etiquette-section">
        <div className="container">
          <div className="etiquette-content">
            <h2>Sikkimese Dining Etiquette</h2>
            <div className="etiquette-grid">
              <div className="etiquette-item">
                <div className="etiquette-icon">🙏</div>
                <h4>Respect for Food</h4>
                <p>Food is considered sacred. Never waste or disrespect it.</p>
              </div>
              <div className="etiquette-item">
                <div className="etiquette-icon">🤲</div>
                <h4>Eating with Hands</h4>
                <p>Traditional way of eating, especially with rice dishes.</p>
              </div>
              <div className="etiquette-item">
                <div className="etiquette-icon">🍶</div>
                <h4>Sharing Culture</h4>
                <p>Food and drinks are often shared among family and guests.</p>
              </div>
              <div className="etiquette-item">
                <div className="etiquette-icon">🌱</div>
                <h4>Seasonal Eating</h4>
                <p>Respect for seasonal produce and local availability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisines;