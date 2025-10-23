import React from 'react';
import './Clothing.css';

const Clothing = () => {
  const traditionalOutfits = [
    {
      id: 1,
      name: "Bakhu",
      ethnicGroup: "Bhutia",
      image: "/images/bakhu.jpg",
      description: "The traditional dress of Bhutia community, a loose cloak-like garment that is tied at the neck and waist.",
      components: [
        "Bakhu: Main garment",
        "Honju: Inner shirt",
        "Taro: Colorful striped apron",
        "Pangden: Woven design"
      ],
      occasions: ["Daily wear", "Festivals", "Weddings", "Religious ceremonies"],
      colors: ["Deep red", "Maroon", "Blue", "Green"],
      significance: "Symbol of Bhutia identity and cultural pride"
    },
    {
      id: 2,
      name: "Kho",
      ethnicGroup: "Lepcha",
      image: "/images/kho.jpg",
      description: "Traditional Lepcha dress consisting of a pajama-like lower garment and a top piece wrapped around.",
      components: [
        "Thokro-Dum: Lower garment",
        "Nyamrek: Upper garment",
        "Tago: Belt",
        "Shambu: Headgear"
      ],
      occasions: ["Cultural events", "Weddings", "Festivals", "Daily wear"],
      colors: ["White", "Striped patterns", "Earth tones"],
      significance: "Represents Lepcha heritage and connection to nature"
    },
    {
      id: 3,
      name: "Pangden",
      ethnicGroup: "Bhutia Women",
      image: "/images/pangden.jpg",
      description: "Colorful striped apron worn by Bhutia women over their Bakhu, featuring intricate woven patterns.",
      components: [
        "Woven stripes",
        "Geometric patterns",
        "Silk threads",
        "Traditional motifs"
      ],
      occasions: ["Festivals", "Weddings", "Special occasions"],
      colors: ["Rainbow stripes", "Gold threads", "Vibrant colors"],
      significance: "Marital status indicator and artistic expression"
    },
    {
      id: 4,
      name: "Dumpra",
      ethnicGroup: "Monpa",
      image: "/images/dumpra.jpg",
      description: "Traditional dress of Monpa tribe, made from raw silk with distinctive patterns and designs.",
      components: [
        "Long robe",
        "Colorful borders",
        "Geometric designs",
        "Handwoven fabric"
      ],
      occasions: ["Religious events", "Festivals", "Cultural gatherings"],
      colors: ["Red", "Yellow", "Blue", "White"],
      significance: "Cultural identity of Monpa community"
    }
  ];

  const accessories = [
    {
      id: 1,
      name: "Traditional Jewelry",
      type: "Ornaments",
      image: "/images/sikkim-jewelry.jpg",
      description: "Intricate silver and gold jewelry featuring Buddhist symbols and traditional motifs.",
      items: [
        "Koma: Traditional brooch",
        "Yue: Earrings",
        "Phiru: Necklace",
        "Bulu: Bracelets"
      ],
      materials: ["Silver", "Gold", "Turquoise", "Coral"],
      significance: "Symbol of status and cultural identity"
    },
    {
      id: 2,
      name: "Headgear",
      type: "Head Accessories",
      image: "/images/sikkim-headgear.jpg",
      description: "Traditional hats and headpieces representing different communities and occasions.",
      items: [
        "Shambu: Lepcha cap",
        "Bakhu cap: Bhutia headgear",
        "Wedding crown",
        "Festival headdress"
      ],
      materials: ["Wool", "Silk", "Embroidery", "Beads"],
      significance: "Community identification and ceremonial importance"
    },
    {
      id: 3,
      name: "Footwear",
      type: "Traditional Shoes",
      image: "/images/sikkim-footwear.jpg",
      description: "Handmade traditional shoes designed for mountainous terrain and cold weather.",
      items: [
        "Lepcha shoes",
        "Bhutia boots",
        "Woolen socks",
        "Leather soles"
      ],
      materials: ["Leather", "Wool", "Colorful threads", "Traditional patterns"],
      significance: "Practical footwear with cultural designs"
    }
  ];

  const fabricsWeaving = [
    {
      id: 1,
      name: "Lepcha Weaving",
      community: "Lepcha",
      image: "/images/lepcha-weaving.jpg",
      description: "Intricate backstrap loom weaving technique producing beautiful geometric patterns.",
      techniques: [
        "Backstrap loom",
        "Geometric patterns",
        "Natural dyes",
        "Hand spinning"
      ],
      products: ["Thokro-Dum", "Nyamrek", "Scarves", "Shawls"],
      status: "Protected GI tag"
    },
    {
      id: 2,
      name: "Bhutia Weaving",
      community: "Bhutia",
      image: "/images/bhutia-weaving.jpg",
      description: "Traditional wool and silk weaving for Bakhu and other traditional garments.",
      techniques: [
        "Pit loom weaving",
        "Striped patterns",
        "Silk embroidery",
        "Wool processing"
      ],
      products: ["Bakhu", "Pangden", "Blankets", "Carpets"],
      status: "Traditional craft"
    },
    {
      id: 3,
      name: "Natural Dyes",
      community: "All Communities",
      image: "/images/natural-dyes.jpg",
      description: "Using local plants and minerals to create vibrant, eco-friendly fabric colors.",
      sources: [
        "Madder root: Red",
        "Indigo: Blue",
        "Turmeric: Yellow",
        "Walnut: Brown"
      ],
      process: ["Plant harvesting", "Dye extraction", "Fabric treatment", "Color fixing"],
      status: "Sustainable practice"
    }
  ];

  const modernAdaptations = [
    {
      id: 1,
      name: "Fusion Wear",
      description: "Traditional patterns adapted to modern clothing styles for contemporary appeal.",
      examples: ["Bakhu-inspired jackets", "Pangden pattern scarves", "Modern Lepcha prints"],
      popularity: "Growing among youth",
      usage: ["Fashion events", "Casual wear", "Cultural festivals"]
    },
    {
      id: 2,
      name: "Designer Collections",
      description: "Fashion designers incorporating Sikkimese motifs into mainstream fashion.",
      examples: ["Runway collections", "Boutique designs", "Export products"],
      popularity: "International interest",
      usage: ["High fashion", "Cultural exports", "Designer wear"]
    },
    {
      id: 3,
      name: "Accessory Modernization",
      description: "Traditional jewelry and accessories redesigned for modern tastes.",
      examples: ["Contemporary Koma designs", "Modern jewelry", "Fusion accessories"],
      popularity: "Urban markets",
      usage: ["Daily wear", "Fashion statements", "Gift items"]
    }
  ];

  return (
    <div className="clothing-section">
      {/* Hero Section */}
      <div className="clothing-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Traditional Clothing of Sikkim</h1>
          <p>Discover the vibrant textiles and intricate craftsmanship of Sikkim's diverse ethnic communities</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction-section">
        <div className="container">
          <div className="intro-content">
            <h2>Weaving Cultural Identity</h2>
            <p>
              Sikkim's traditional clothing represents a beautiful tapestry of cultural heritage, 
              with each ethnic community - Bhutia, Lepcha, and Nepali - maintaining distinct 
              sartorial traditions. These garments are not just clothing but living expressions 
              of identity, history, and artistic excellence passed down through generations.
            </p>
            <div className="clothing-features">
              <div className="feature">
                <span className="feature-icon">🧵</span>
                <h4>Handwoven Excellence</h4>
                <p>Traditional looms and weaving techniques</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <h4>Vibrant Colors</h4>
                <p>Natural dyes and symbolic color patterns</p>
              </div>
              <div className="feature">
                <span className="feature-icon">👑</span>
                <h4>Cultural Significance</h4>
                <p>Garments representing community identity</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <h4>Sustainable Practices</h4>
                <p>Eco-friendly materials and processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Outfits */}
      <div className="outfits-section">
        <div className="container">
          <div className="section-header">
            <h2>Traditional Outfits</h2>
            <p>Explore the distinctive traditional dresses of Sikkim's main ethnic communities</p>
          </div>

          <div className="outfits-grid">
            {traditionalOutfits.map(outfit => (
              <div key={outfit.id} className="outfit-card">
                <div className="outfit-image">
                  <img 
                    src={outfit.image} 
                    alt={outfit.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23666'%3EClothing Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="ethnic-badge">{outfit.ethnicGroup}</div>
                </div>
                <div className="outfit-content">
                  <div className="outfit-header">
                    <h3>{outfit.name}</h3>
                    <span className="community-tag">{outfit.ethnicGroup}</span>
                  </div>
                  <p className="outfit-description">{outfit.description}</p>
                  
                  <div className="outfit-details">
                    <div className="detail-group">
                      <h4>Components:</h4>
                      <div className="components-list">
                        {outfit.components.map((component, index) => (
                          <span key={index} className="component-tag">{component}</span>
                        ))}
                      </div>
                    </div>

                    <div className="detail-group">
                      <h4>Occasions:</h4>
                      <div className="occasions-list">
                        {outfit.occasions.map((occasion, index) => (
                          <span key={index} className="occasion-tag">{occasion}</span>
                        ))}
                      </div>
                    </div>

                    <div className="detail-group">
                      <h4>Colors:</h4>
                      <div className="colors-list">
                        {outfit.colors.map((color, index) => (
                          <span 
                            key={index} 
                            className="color-tag"
                            style={{ 
                              backgroundColor: color.includes('red') ? '#dc3545' : 
                                            color.includes('blue') ? '#007bff' :
                                            color.includes('green') ? '#28a745' :
                                            color.includes('yellow') ? '#ffc107' :
                                            color.includes('white') ? '#f8f9fa' :
                                            color.includes('gold') ? '#ffd700' :
                                            color.includes('rainbow') ? 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)' :
                                            color.includes('earth') ? '#8B4513' :
                                            color.includes('maroon') ? '#800000' :
                                            '#6c757d',
                              color: color.includes('white') || color.includes('gold') ? '#000' : '#fff'
                            }}
                            title={color}
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="significance">
                    <strong>Cultural Significance:</strong> {outfit.significance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Accessories */}
      <div className="accessories-section">
        <div className="container">
          <div className="section-header">
            <h2>Traditional Accessories</h2>
            <p>Complete the traditional look with exquisite jewelry and adornments</p>
          </div>

          <div className="accessories-grid">
            {accessories.map(accessory => (
              <div key={accessory.id} className="accessory-card">
                <div className="accessory-image">
                  <img 
                    src={accessory.image} 
                    alt={accessory.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='250' viewBox='0 0 350 250'%3E%3Crect width='350' height='250' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3EAccessory Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="accessory-content">
                  <h3>{accessory.name}</h3>
                  <span className="accessory-type">{accessory.type}</span>
                  <p className="accessory-description">{accessory.description}</p>
                  
                  <div className="accessory-details">
                    <div className="items-list">
                      <h4>Items:</h4>
                      <div className="items-grid">
                        {accessory.items.map((item, index) => (
                          <span key={index} className="item-tag">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="materials-list">
                      <h4>Materials:</h4>
                      <div className="materials-grid">
                        {accessory.materials.map((material, index) => (
                          <span key={index} className="material-tag">{material}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="accessory-significance">
                    <strong>Significance:</strong> {accessory.significance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fabrics & Weaving */}
      <div className="weaving-section">
        <div className="container">
          <div className="section-header">
            <h2>Traditional Weaving & Fabrics</h2>
            <p>Ancient textile techniques preserving Sikkim's rich weaving heritage</p>
          </div>

          <div className="weaving-grid">
            {fabricsWeaving.map(weaving => (
              <div key={weaving.id} className="weaving-card">
                <div className="weaving-image">
                  <img 
                    src={weaving.image} 
                    alt={weaving.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23666'%3EWeaving Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="community-badge">{weaving.community}</div>
                </div>
                <div className="weaving-content">
                  <h3>{weaving.name}</h3>
                  <p className="weaving-description">{weaving.description}</p>
                  
                  <div className="weaving-details">
                    <div className="techniques">
                      <h4>Techniques:</h4>
                      <div className="techniques-list">
                        {weaving.techniques && weaving.techniques.map((technique, index) => (
                          <span key={index} className="technique-tag">{technique}</span>
                        ))}
                      </div>
                    </div>

                    <div className="products">
                      <h4>Products:</h4>
                      <div className="products-list">
                        {weaving.products && weaving.products.map((product, index) => (
                          <span key={index} className="product-tag">{product}</span>
                        ))}
                      </div>
                    </div>

                    {weaving.sources && (
                      <div className="sources">
                        <h4>Natural Dyes:</h4>
                        <div className="sources-list">
                          {weaving.sources.map((source, index) => (
                            <span key={index} className="source-tag">{source}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {weaving.process && (
                      <div className="process">
                        <h4>Process:</h4>
                        <div className="process-list">
                          {weaving.process.map((step, index) => (
                            <span key={index} className="process-tag">{step}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="status-tag">{weaving.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Adaptations */}
      <div className="modern-section">
        <div className="container">
          <div className="section-header">
            <h2>Modern Adaptations</h2>
            <p>Traditional clothing evolving with contemporary fashion trends</p>
          </div>

          <div className="modern-grid">
            {modernAdaptations.map(adaptation => (
              <div key={adaptation.id} className="modern-card">
                <div className="modern-header">
                  <h3>{adaptation.name}</h3>
                  <span className="popularity-tag">{adaptation.popularity}</span>
                </div>
                <p className="modern-description">{adaptation.description}</p>
                
                <div className="examples">
                  <h4>Examples:</h4>
                  <div className="examples-list">
                    {adaptation.examples && adaptation.examples.map((example, index) => (
                      <span key={index} className="example-tag">{example}</span>
                    ))}
                  </div>
                </div>

                <div className="usage">
                  <h4>Usage:</h4>
                  <div className="usage-list">
                    {adaptation.usage && adaptation.usage.map((use, index) => (
                      <span key={index} className="usage-tag">{use}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Preservation */}
      <div className="preservation-section">
        <div className="container">
          <div className="preservation-content">
            <h2>Preserving Textile Heritage</h2>
            <div className="preservation-grid">
              <div className="preservation-item">
                <div className="preservation-icon">🏛️</div>
                <h4>Government Initiatives</h4>
                <p>GI tags and craft promotion programs</p>
              </div>
              <div className="preservation-item">
                <div className="preservation-icon">👩‍🏫</div>
                <h4>Weaving Schools</h4>
                <p>Traditional skill transmission to youth</p>
              </div>
              <div className="preservation-item">
                <div className="preservation-icon">🛍️</div>
                <h4>Craft Fairs</h4>
                <p>Platforms for artisans to showcase work</p>
              </div>
              <div className="preservation-item">
                <div className="preservation-icon">🌐</div>
                <h4>Digital Archives</h4>
                <p>Documenting traditional patterns and techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothing;