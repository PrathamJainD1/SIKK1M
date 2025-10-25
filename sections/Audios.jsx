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
      title: "The Story of Budhha",
      description: "Journey of Siddhartha Gautama from a sheltered prince to the fully Awakened One.",
      duration: "7:08",
      audioSrc: "/audio/Audio-9_30_2025.m4a",
      moral: "True peace comes not from luxury, but from understanding and mastering the mind",
      category: "Life Story "
    },
    {
      id: 2,
      title: "The Mustard Seed",
      description: "A story about a mother who learns the universal truth of suffering and impermanence from Buddha himself.",
      duration: "4:08",
      audioSrc: "/audio/mustard-seed.mp3",
      moral: "Suffering is universal, and understanding this brings compassion",
      category: "Wisdom Story"
    },
    {
      id: 3,
      title: "The Angry Elephant",
      description: "How Buddha tamed a wild elephant through loving-kindness and compassion.",
      duration: "3:02",
      audioSrc: "/audio/angry-elephant.mp3",
      moral: "Love and compassion can tame even the wildest hearts",
      category: "Compassion Story"
    },
    {
      id: 4,
      title: "The Muddy Lake",
      description: " A story that teaches the importance of calmness and patience in finding inner clarity.",
      duration: "4:17",
      audioSrc: "/audio/muddylake.m4a",
      moral: "True wisdom and clarity come through patience and mindfulness, not through struggle or force.",
      category: "Mindfulness Story"
    },
    {
      id: 5,
      title: "The Wounded Swan",
      description: "A story that teaches the value of compassion and protecting life over causing harm.",
      duration: "6:27",
      audioSrc: "/audio/woundedswan.m4a",
      moral: "It shows that protecting life is nobler than taking life",
      category: "Enlightenment Story"
    }
  ];

  const buddhistSlokhas = [
    {
      id: 6, // Changed IDs to avoid conflicts
      title: " Panca Sila - The Five Precept",
      description: " the foundation for mental development (meditation) and wisdom on the path to enlightenment.",
      duration: "1:00",
      audioSrc: "/audio/pancasila.mp3",
      meaning: "The five precepts : (1) Refraining from taking the life of living beings (non-killing).(2) Refraining from taking what is not given (non-stealing).(3) Refraining from sexual misconduct (adultery, exploitation, or generally wrong conduct in sexual pleasures).(4) Refraining from false speech (lying, malicious speech, harsh speech, and gossip).(5) Refraining from intoxicants that cause heedlessness and carelessness (such as alcohol and drugs).",
      category: "Ethical Conduct"
    },
    {
      id: 7,
      title: "Tri-Sarana - The Three Refuges.",
      description: " fundamental and universally accepted act of faith in Buddhism, marking the formal entry of a person onto the Buddhist path.",
      duration: "1:12",
      audioSrc: "/audio/trisarana.mp3",
      meaning: "(1)Buddhaṃ saraṇaṃ gacchāmi(I go to the Buddha for refuge.).(2)Dhammaṃ saraṇaṃ gacchāmi(I go to the Dhamma for refuge).(3)Saṅghaṃ saraṇaṃ gacchāmi(I go to the Saṅgha for refuge.)",
      category: "Refuge of Budhha"
    },
    {
      id: 8,
      title: "Buddha Vandana",
      description: "It is the subsequent extended praise of buddhabhivadana and recollection of the Buddha's nine supreme qualities.",
      duration: "1:47",
      audioSrc: "/audio/buddhavandana.mp3",
      meaning: "Invoking the female Buddha for swift compassion and action",
      category: "Buddhist devotional practice"
    },
    {
      id: 9,
      title: "Buddhabhivadana",
      description: " Ritualized expression of devotion or veneration to the Buddha.",
      duration: "0:38",
      audioSrc: "/audio/buddhabhivadana.mp3",
      meaning: "Purification and healing through the Medicine Buddha's blessings",
      category: " Acknowledging the Budhha"
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
    </div>
  );
};

export default Audios;
