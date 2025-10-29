import React, { useState, useEffect } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Closed by default on mobile
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#places", label: "Places", icon: "🗺️" },
    { href: "#culture", label: "Culture", icon: "🎭" },
    { href: "#clothing", label: "Clothing", icon: "👘" },
    { href: "#cuisines", label: "Cuisines", icon: "🍲" },
    { href: "#teachings", label: "Teachings", icon: "📖" },
    { href: "#audios", label: "Buddhist Audios", icon: "🎵" },
    { href: "#map", label: "Tourist Map", icon: "📍" },
    { href: "#festivals", label: "Festivals", icon: "🎉" },
    { href: "#calendar", label: "Cultural Calendar", icon: "📅" },
    { href: "#donations", label: "Donations", icon: "❤️" },
    { href: "#contact", label: "Contact", icon: "📞" }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Toggle Button */}
      <button 
        className={`sidebar-toggle ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        {/* Logo Section */}
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">🏔️</div>
            <div className="logo-text">
              <h2 className="logo-title">Sikkim Tourism</h2>
              <p className="logo-subtitle">Spiritual Journey</p>
            </div>
          </div>
          
          {/* Close button for mobile */}
          {isMobile && (
            <button 
              className="sidebar-close"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              ×
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={() => isMobile && toggleSidebar()}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="sidebar-footer">
          <div className="user-section">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <span className="user-greeting">Welcome, Guest</span>
              <a href="#signin" className="sign-in-link">Sign In to save preferences</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content spacer for desktop */}
      {!isMobile && (
        <div className={`content-spacer ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} />
      )}
    </>
  );
}

export default Sidebar;
