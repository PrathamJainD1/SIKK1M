import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import { AuthProvider, useAuth } from './components/AuthContext';
import AuthModal from './components/AuthModal';
import UserProfile from './components/UserProfile';
import MonkGuide from './components/MonkGuide';

// Sections
import Home from "../sections/Home";
import Places from "../sections/Places";
import Culture from "../sections/Culture";
import Clothing from "../sections/Clothing";
import Cuisines from "../sections/Cuisines";
import Teachings from "../sections/Teachings";
import Festivals from "../sections/Festivals";
import CulturalCalendar from "../sections/CulturalCalendar";
import Donations from "../sections/Donations";
import Contact from "../sections/Contact";
// Add these imports with other section imports
import Audios from "../sections/Audios";
import Map from "../sections/Map";

// Main Content Component with Authentication
const WebsiteContent = () => {
  const { user, isLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (isLoading) {
    return (
      <div className="app">
        <Sidebar />
        <main className="content">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading Sikkim's spiritual journey...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Clean Minimal Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-brand">
            <div className="logo">🏔️</div>
            <div className="brand-text">
              <h1 className="app-title">Sikkim Tourism</h1>
              <p className="app-subtitle">Spiritual Journey</p>
            </div>
          </div>
          <div className="header-actions">
            <nav className="auth-nav">
              {user ? (
                <UserProfile />
              ) : (
                <button 
                  className="auth-btn"
                  onClick={() => setShowAuthModal(true)}
                >
                  Sign In
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      <Sidebar />
      <main className="content">
        {/* Subtle Guest Notice */}
        {!user && (
          <div className="guest-notice-banner">
            <div className="guest-notice-content">
              <span className="guest-icon">👤</span>
              <p>
                Exploring as guest. 
                <button 
                  onClick={() => setShowAuthModal(true)}
                  className="guest-login-btn"
                >
                  Sign in
                </button> 
                to save preferences & chat history.
              </p>
            </div>
          </div>
        )}

        {/* Your Original Sections - Completely Unchanged */}
        <section id="home"><Home /></section>
        <section id="places"><Places /></section>
        <section id="culture"><Culture /></section>
        <section id="clothing"><Clothing /></section>
        <section id="cuisines"><Cuisines /></section>
        <section id="teachings"><Teachings /></section>
        <section id="audios"><Audios /></section>
        <section id="map"><Map /></section>
        <section id="festivals"><Festivals /></section>        
        <section id="calendar"><CulturalCalendar /></section>
        <section id="donations"><Donations /></section>
        <section id="contact"><Contact /></section>
        
        <Footer/>
      </main>

      {/* Authentication Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />

      {/* Monk Guide */}
      <MonkGuide />
    </div>
  );
};

// Main App Component with AuthProvider
function App() {
  return (
    <AuthProvider>
      <WebsiteContent />
    </AuthProvider>
  );
}

export default App;