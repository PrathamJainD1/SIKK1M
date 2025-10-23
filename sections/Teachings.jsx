import React from 'react';
import './Teachings.css';

const Teachings = () => {
  const buddhistTeachings = [
    {
      id: 1,
      title: "The Four Noble Truths",
      icon: "🕉️",
      description: "The foundation of Buddhist philosophy that explains the nature of suffering and the path to liberation.",
      principles: [
        "Dukkha: The truth of suffering",
        "Samudaya: The truth of the cause of suffering",
        "Nirodha: The truth of the end of suffering",
        "Magga: The truth of the path to end suffering"
      ],
      significance: "Core teaching of Buddha that forms the basis of all Buddhist practices",
      practice: "Mindfulness meditation and ethical living"
    },
    {
      id: 2,
      title: "The Noble Eightfold Path",
      icon: "☸️",
      description: "The practical guideline to ethical and mental development to end suffering.",
      principles: [
        "Right Understanding",
        "Right Thought",
        "Right Speech",
        "Right Action",
        "Right Livelihood",
        "Right Effort",
        "Right Mindfulness",
        "Right Concentration"
      ],
      significance: "Practical path to enlightenment and liberation from suffering",
      practice: "Daily application in thoughts, words, and actions"
    },
    {
      id: 3,
      title: "The Three Jewels",
      icon: "💎",
      description: "The three central components of Buddhist faith and practice.",
      principles: [
        "Buddha: The enlightened one",
        "Dharma: The teachings",
        "Sangha: The spiritual community"
      ],
      significance: "Foundation of Buddhist refuge and spiritual practice",
      practice: "Taking refuge and following the spiritual path"
    },
    {
      id: 4,
      title: "Karma & Rebirth",
      icon: "🔄",
      description: "The law of cause and effect governing the cycle of birth and death.",
      principles: [
        "Every action has consequences",
        "Intentions matter more than actions",
        "Karma determines rebirth",
        "Liberation breaks the cycle"
      ],
      significance: "Explains the mechanism of suffering and path to liberation",
      practice: "Cultivating positive actions and intentions"
    }
  ];

  const meditationPractices = [
    {
      id: 1,
      name: "Mindfulness Meditation",
      type: "Vipassana",
      duration: "20-60 minutes",
      benefits: ["Increased awareness", "Stress reduction", "Emotional balance"],
      instructions: [
        "Sit comfortably with straight spine",
        "Focus on natural breath",
        "Observe thoughts without judgment",
        "Return to breath when mind wanders"
      ],
      difficulty: "Beginner"
    },
    {
      id: 2,
      name: "Loving-Kindness Meditation",
      type: "Metta",
      duration: "15-30 minutes",
      benefits: ["Compassion cultivation", "Reduced anger", "Improved relationships"],
      instructions: [
        "Generate feelings of love for yourself",
        "Extend to loved ones",
        "Include neutral people",
        "Extend to all beings"
      ],
      difficulty: "Intermediate"
    },
    {
      id: 3,
      name: "Analytical Meditation",
      type: "Tibetan",
      duration: "30-90 minutes",
      benefits: ["Wisdom development", "Deep understanding", "Mental clarity"],
      instructions: [
        "Choose a philosophical topic",
        "Analyze it from different angles",
        "Contemplate deeply",
        "Rest in realization"
      ],
      difficulty: "Advanced"
    },
    {
      id: 4,
      name: "Visualization Meditation",
      type: "Tantric",
      duration: "20-45 minutes",
      benefits: ["Mental purification", "Energy balancing", "Spiritual connection"],
      instructions: [
        "Visualize deities or symbols",
        "Maintain clear mental image",
        "Combine with mantra recitation",
        "Dissolve visualization"
      ],
      difficulty: "Advanced"
    }
  ];

  const moralPrecepts = [
    {
      id: 1,
      precept: "Refrain from taking life",
      explanation: "Practice compassion and respect for all living beings",
      application: "Vegetarianism, protecting animals, environmental conservation",
      level: "Fundamental"
    },
    {
      id: 2,
      precept: "Refrain from taking what is not given",
      explanation: "Cultivate contentment and respect for others' property",
      application: "Honesty in dealings, generosity, fair trade",
      level: "Fundamental"
    },
    {
      id: 3,
      precept: "Refrain from sexual misconduct",
      explanation: "Practice respect and responsibility in relationships",
      application: "Faithfulness, consent, healthy relationships",
      level: "Fundamental"
    },
    {
      id: 4,
      precept: "Refrain from false speech",
      explanation: "Cultivate truthfulness and mindful communication",
      application: "Honest speech, avoiding gossip, constructive communication",
      level: "Fundamental"
    },
    {
      id: 5,
      precept: "Refrain from intoxicants",
      explanation: "Maintain clear awareness and mental clarity",
      application: "Mindful consumption, healthy lifestyle, clear mind",
      level: "Fundamental"
    }
  ];

  const wisdomQuotes = [
    {
      id: 1,
      quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
      context: "On mindfulness and present moment awareness"
    },
    {
      id: 2,
      quote: "Holding onto anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
      author: "Buddha",
      context: "On the nature of anger and its consequences"
    },
    {
      id: 3,
      quote: "Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
      author: "Buddha",
      context: "On the nature of generosity and happiness"
    },
    {
      id: 4,
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
      context: "On the power of mind and thoughts"
    }
  ];

  return (
    <div className="teachings-section">
      {/* Hero Section */}
      <div className="teachings-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Buddhist Teachings & Philosophy</h1>
          <p>Discover the profound wisdom of Buddha's teachings that have guided spiritual seekers for 2,500 years</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction-section">
        <div className="container">
          <div className="intro-content">
            <h2>The Path to Enlightenment</h2>
            <p>
              Buddhism in Sikkim represents a living tradition that blends ancient wisdom with modern life. 
              The teachings emphasize practical methods for transforming the mind, developing compassion, 
              and achieving lasting happiness. Rooted in the Mahayana and Vajrayana traditions, Sikkimese 
              Buddhism offers a comprehensive path from basic morality to advanced meditation practices.
            </p>
            <div className="teaching-features">
              <div className="feature">
                <span className="feature-icon">🧠</span>
                <h4>Mind Training</h4>
                <p>Systematic methods to transform consciousness</p>
              </div>
              <div className="feature">
                <span className="feature-icon">💖</span>
                <h4>Compassion</h4>
                <p>Cultivation of loving-kindness for all beings</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🌟</span>
                <h4>Wisdom</h4>
                <p>Understanding the true nature of reality</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🕊️</span>
                <h4>Liberation</h4>
                <p>Freedom from suffering and cyclic existence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Teachings */}
      <div className="teachings-section-core">
        <div className="container">
          <div className="section-header">
            <h2>Core Buddhist Teachings</h2>
            <p>The fundamental principles that form the foundation of Buddhist philosophy</p>
          </div>

          <div className="teachings-grid">
            {buddhistTeachings.map(teaching => (
              <div key={teaching.id} className="teaching-card">
                <div className="teaching-header">
                  <div className="teaching-icon">{teaching.icon}</div>
                  <h3>{teaching.title}</h3>
                </div>
                <p className="teaching-description">{teaching.description}</p>
                
                <div className="principles-list">
                  <h4>Key Principles:</h4>
                  <ul>
                    {teaching.principles.map((principle, index) => (
                      <li key={index}>{principle}</li>
                    ))}
                  </ul>
                </div>

                <div className="teaching-details">
                  <div className="detail-item">
                    <strong>Significance:</strong> {teaching.significance}
                  </div>
                  <div className="detail-item">
                    <strong>Practice:</strong> {teaching.practice}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meditation Practices */}
      <div className="meditation-section">
        <div className="container">
          <div className="section-header">
            <h2>Meditation Practices</h2>
            <p>Practical techniques for mental development and spiritual growth</p>
          </div>

          <div className="meditation-grid">
            {meditationPractices.map(practice => (
              <div key={practice.id} className="meditation-card">
                <div className="meditation-header">
                  <h3>{practice.name}</h3>
                  <span className={`difficulty-badge ${practice.difficulty.toLowerCase()}`}>
                    {practice.difficulty}
                  </span>
                </div>
                <div className="meditation-meta">
                  <span className="type-tag">{practice.type}</span>
                  <span className="duration-tag">⏱️ {practice.duration}</span>
                </div>
                
                <div className="benefits">
                  <h4>Benefits:</h4>
                  <div className="benefits-list">
                    {practice.benefits.map((benefit, index) => (
                      <span key={index} className="benefit-tag">{benefit}</span>
                    ))}
                  </div>
                </div>

                <div className="instructions">
                  <h4>Instructions:</h4>
                  <ol>
                    {practice.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Moral Precepts */}
      <div className="precepts-section">
        <div className="container">
          <div className="section-header">
            <h2>The Five Moral Precepts</h2>
            <p>Ethical guidelines for harmonious living and spiritual progress</p>
          </div>

          <div className="precepts-grid">
            {moralPrecepts.map(precept => (
              <div key={precept.id} className="precept-card">
                <div className="precept-number">{precept.id}</div>
                <div className="precept-content">
                  <h3>{precept.precept}</h3>
                  <p className="precept-explanation">{precept.explanation}</p>
                  <div className="precept-application">
                    <strong>Practical Application:</strong> {precept.application}
                  </div>
                  <span className="level-tag">{precept.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wisdom Quotes */}
      <div className="quotes-section">
        <div className="container">
          <div className="section-header">
            <h2>Words of Wisdom</h2>
            <p>Inspirational quotes from Buddha and great Buddhist masters</p>
          </div>

          <div className="quotes-grid">
            {wisdomQuotes.map(quote => (
              <div key={quote.id} className="quote-card">
                <div className="quote-content">
                  <p>"{quote.quote}"</p>
                </div>
                <div className="quote-author">
                  <strong>— {quote.author}</strong>
                  <span className="quote-context">{quote.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Practice */}
      <div className="practice-section">
        <div className="container">
          <div className="practice-content">
            <h2>Integrating Teachings into Daily Life</h2>
            <div className="practice-tips">
              <div className="tip">
                <div className="tip-icon">🌅</div>
                <h4>Morning Practice</h4>
                <p>Start the day with 15 minutes of meditation and setting positive intentions</p>
              </div>
              <div className="tip">
                <div className="tip-icon">🍽️</div>
                <h4>Mindful Eating</h4>
                <p>Practice gratitude and mindfulness during meals</p>
              </div>
              <div className="tip">
                <div className="tip-icon">💬</div>
                <h4>Right Speech</h4>
                <p>Be mindful of words and practice compassionate communication</p>
              </div>
              <div className="tip">
                <div className="tip-icon">🌙</div>
                <h4>Evening Reflection</h4>
                <p>Review the day's actions and cultivate forgiveness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachings;