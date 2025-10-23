import React, { useState, useRef, useEffect } from 'react';
import './Audios.css';

const Audios = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const buddhistStories = [
    {
      id: 1,
      title: "The Mustard Seed",
      description: "A story about a mother who learns the universal truth of suffering and impermanence from Buddha himself.",
      duration: "0:38",
      audioSrc: "/audio/AUD-20251017-WA0021.mp3",
      moral: "Suffering is universal, and understanding this brings compassion",
      category: "Wisdom Story"
    },
    {
      id: 2,
      title: "The Angry Elephant",
      description: "How Buddha tamed a wild elephant through loving-kindness and compassion.",
      duration: "6:30",
      audioSrc: "/audio/angry-elephant.mp3",
      moral: "Love and compassion can tame even the wildest hearts",
      category: "Compassion Story"
    },
    {
      id: 3,
      title: "The Two Arrows",
      description: "Buddha teaches about physical pain and mental suffering through the metaphor of two arrows.",
      duration: "7:15",
      audioSrc: "/audio/two-arrows.mp3",
      moral: "We suffer more from our reactions than from the pain itself",
      category: "Mindfulness Story"
    },
    {
      id: 4,
      title: "The Silent Buddha",
      description: "A story about understanding the essence of Dharma beyond words and scriptures.",
      duration: "9:20",
      audioSrc: "/audio/silent-buddha.mp3",
      moral: "True understanding comes from experience, not just knowledge",
      category: "Enlightenment Story"
    }
  ];

  const buddhistSlokhas = [
    {
      id: 5, // Changed IDs to avoid conflicts
      title: "Om Mani Padme Hum",
      description: "The six-syllable mantra of Avalokiteshvara, embodying compassion and wisdom.",
      duration: "12:30",
      audioSrc: "/audio/om-mani-padme-hum.mp3",
      meaning: "The jewel is in the lotus - purity of body, speech, and mind",
      category: "Mantra Chanting"
    },
    {
      id: 6,
      title: "Heart Sutra Chant",
      description: "The profound Prajnaparamita Heart Sutra chanted by Tibetan monks.",
      duration: "15:45",
      audioSrc: "/audio/heart-sutra.mp3",
      meaning: "Form is emptiness, emptiness is form - the essence of wisdom",
      category: "Sutra Chanting"
    },
    {
      id: 7,
      title: "Green Tara Mantra",
      description: "Chant for protection and removal of obstacles by Green Tara.",
      duration: "10:20",
      audioSrc: "/audio/green-tara.mp3",
      meaning: "Invoking the female Buddha for swift compassion and action",
      category: "Protection Mantra"
    },
    {
      id: 8,
      title: "Medicine Buddha Mantra",
      description: "Healing chant for physical and spiritual well-being.",
      duration: "8:15",
      audioSrc: "/audio/medicine-buddha.mp3",
      meaning: "Purification and healing through the Medicine Buddha's blessings",
      category: "Healing Chant"
    }
  ];

  // Reset all audio states except the current one
  const resetAllAudios = (currentAudioId) => {
    // This function ensures only one audio is marked as playing
    // The state management already handles this through currentAudio and isPlaying
  };

  const handlePlayAudio = (audio) => {
    // If clicking the same audio that's currently playing, toggle play/pause
    if (currentAudio && currentAudio.id === audio.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // If a different audio is clicked
      // First pause current audio if playing
      if (isPlaying && audioRef.current) {
        audioRef.current.pause();
      }
      
      // Set new audio and play it
      setCurrentAudio(audio);
      setIsPlaying(true);
      
      // Use timeout to ensure audio element is updated with new src
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
          });
        }
      }, 100);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    
    const progressContainer = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = progressContainer.clientWidth;
    const clickTime = (clickX / width) * duration;
    
    audioRef.current.currentTime = clickTime;
    setCurrentTime(clickTime);
  };

  // Calculate progress percentage
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audios-section">
      {/* Audio Player */}
      <div className={`audio-player ${currentAudio ? 'audio-player-visible' : ''}`}>
        <div className="player-content">
          <div className="track-info">
            <h4>{currentAudio?.title || 'Select an audio'}</h4>
            <p>{currentAudio?.description || 'Choose from below to begin listening'}</p>
          </div>
          <div className="player-controls">
            <button 
              className="play-pause-btn"
              onClick={() => currentAudio && handlePlayAudio(currentAudio)}
              disabled={!currentAudio}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <div className="progress-container">
              <span className="current-time">{formatTime(currentTime)}</span>
              <div 
                className="progress-bar" 
                onClick={handleProgressClick}
                style={{cursor: 'pointer'}}
              >
                <div 
                  className="progress" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="duration">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentAudio?.audioSrc}
        onEnded={handleAudioEnd}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />

      {/* Hero Section */}
      <div className="audios-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Buddhist Wisdom Library</h1>
          <p>Listen to ancient stories and sacred chants for spiritual growth and inner peace</p>
        </div>
      </div>

      {/* Buddhist Stories Section */}
      <div className="stories-section">
        <div className="container">
          <div className="section-header">
            <h2>Buddhist Stories with Moral Values</h2>
            <p>Ancient tales from Buddha's life and teachings that illuminate the path to enlightenment</p>
          </div>

          <div className="audio-grid">
            {buddhistStories.map((story) => (
              <div key={story.id} className="audio-card">
                <div className="card-header">
                  <span className="category-badge">{story.category}</span>
                  <span className="duration-badge">{story.duration}</span>
                </div>
                <div className="card-content">
                  <h3>{story.title}</h3>
                  <p className="audio-description">{story.description}</p>
                  <div className="moral-lesson">
                    <strong>Moral:</strong> {story.moral}
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className={`play-button ${currentAudio?.id === story.id && isPlaying ? 'playing' : ''}`}
                    onClick={() => handlePlayAudio(story)}
                  >
                    {currentAudio?.id === story.id && isPlaying ? '⏸️ Pause' : '▶️ Play Story'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buddhist Slokhas Section */}
      <div className="slokhas-section">
        <div className="container">
          <div className="section-header">
            <h2>Sacred Buddhist Chants & Slokhas</h2>
            <p>Experience the transformative power of ancient mantras and sutra recitations</p>
          </div>

          <div className="audio-grid">
            {buddhistSlokhas.map((slokha) => (
              <div key={slokha.id} className="audio-card slokha-card">
                <div className="card-header">
                  <span className="category-badge mantra">{slokha.category}</span>
                  <span className="duration-badge">{slokha.duration}</span>
                </div>
                <div className="card-content">
                  <h3>{slokha.title}</h3>
                  <p className="audio-description">{slokha.description}</p>
                  <div className="meaning">
                    <strong>Meaning:</strong> {slokha.meaning}
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className={`play-button ${currentAudio?.id === slokha.id && isPlaying ? 'playing' : ''}`}
                    onClick={() => handlePlayAudio(slokha)}
                  >
                    {currentAudio?.id === slokha.id && isPlaying ? '⏸️ Pause' : '🕉️ Play Chant'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🧘</div>
              <h3>Mindfulness</h3>
              <p>Develop present-moment awareness through guided listening</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💖</div>
              <h3>Compassion</h3>
              <p>Cultivate loving-kindness and empathy for all beings</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌟</div>
              <h3>Wisdom</h3>
              <p>Gain profound insights into the nature of reality</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🕊️</div>
              <h3>Inner Peace</h3>
              <p>Find tranquility and balance in daily life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audios;