import React, { useState } from "react";
import "./Donations.css";

function Donations() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCause, setSelectedCause] = useState("monastery");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const presetAmounts = [500, 1000, 2000, 5000, 10000, "Other"];

  const causes = [
    {
      id: "monastery",
      title: "Monastery Preservation",
      description: "Help maintain ancient monasteries and sacred spaces",
      icon: "🕌",
      impact: "Your donation preserves 500+ years of spiritual heritage"
    },
    {
      id: "monks",
      title: "Monk Support",
      description: "Support the daily needs and education of Buddhist monks",
      icon: "🙏",
      impact: "Feeds and educates monks dedicated to spiritual practice"
    },
    {
      id: "education",
      title: "Monastic Education",
      description: "Fund traditional Buddhist education and scriptures",
      icon: "📚",
      impact: "Preserves ancient teachings for future generations"
    },
    {
      id: "community",
      title: "Community Welfare",
      description: "Support local communities around monasteries",
      icon: "❤️",
      impact: "Helps villagers who maintain sacred traditions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      amount: "₹2,000",
      message: "Knowing my donation helps preserve these sacred spaces brings me peace."
    },
    {
      name: "Rajiv Sharma",
      amount: "₹5,000",
      message: "Supporting the monks feels like supporting the guardians of wisdom."
    },
    {
      name: "Emma Thompson",
      amount: "₹1,000",
      message: "The ancient traditions of Sikkim deserve to be preserved forever."
    }
  ];

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setAmount("");
      setName("");
      setEmail("");
      setMessage("");
    }, 5000);
  };

  const selectedCauseData = causes.find(cause => cause.id === selectedCause);

  if (success) {
    return (
      <div className="donations-container">
        <div className="donations-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Thank You for Your Generosity</h1>
            <p>Your contribution will make a meaningful difference in preserving Sikkim's spiritual heritage</p>
          </div>
        </div>

        <div className="success-container">
          <div className="success-animation">
            <div className="success-icon">🌸</div>
            <div className="success-pulse"></div>
          </div>
          <h2>Blessings from the Himalayas</h2>
          <p className="success-message">
            Dear <strong>{name}</strong>, your donation of <strong>₹{amount}</strong> towards{" "}
            <strong>{selectedCauseData?.title}</strong> has been received with gratitude.
          </p>
          <p className="success-impact">
            {selectedCauseData?.impact}
          </p>
          <div className="prayer-blessing">
            <div className="prayer-wheel">☸️</div>
            <p>May your kindness return to you multiplied</p>
            <p className="prayer-text">Om Mani Padme Hum</p>
          </div>
          <button 
            className="donate-again-btn"
            onClick={() => setSuccess(false)}
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="donations-container">
      {/* Hero Section */}
      <div className="donations-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Donations</h1>
          <p>Join us in supporting the monasteries and monks who have safeguarded Sikkim's spiritual heritage for centuries</p>    
          <div className="impact-stats">

          </div>
        </div>
      </div>

      <div className="donations-content">
        <div className="container">
          {/* Emotional Story Section */}
          <div className="story-section">
            <div className="story-content">
              <h2>Guardians of the Himalayas</h2>
              <p>
                In the misty peaks of Sikkim, ancient monasteries stand as beacons of peace and wisdom. 
                For over five centuries, monks have dedicated their lives to preserving sacred teachings, 
                performing rituals that connect heaven and earth, and maintaining spiritual practices that 
                bring solace to thousands.
              </p>
              <p>
                Today, these sacred spaces face challenges. Your support helps preserve these living treasures, 
                ensuring that the chants continue to echo through the mountains and the butter lamps keep burning 
                as they have for generations.
              </p>
              <div className="quote">
                <div className="quote-icon">❝</div>
                <p>Every donation, no matter the size, helps keep the ancient wisdom alive for future seekers.</p>
                <div className="quote-author">- Rinpoche of Rumtek Monastery</div>
              </div>
            </div>
            <div className="story-image">
              <div className="monastery-image"></div>
            </div>
          </div>

          {/* Causes Selection */}
          <div className="causes-section">
            <h2>Choose Your Impact</h2>
            <p>Select how you'd like to make a difference</p>
            <div className="causes-grid">
              {causes.map(cause => (
                <div
                  key={cause.id}
                  className={`cause-card ${selectedCause === cause.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCause(cause.id)}
                >
                  <div className="cause-icon">{cause.icon}</div>
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <div className="cause-impact">{cause.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div className="donation-form-section">
            <div className="form-container">
              <div className="form-header">
                <h2>Make a Sacred Offering</h2>
                <p>Your generosity supports: <strong>{selectedCauseData?.title}</strong></p>
              </div>

              <form onSubmit={handlePayment} className="donation-form">
                <div className="form-group">
                  <label>Your Sacred Offering Amount (₹)</label>
                  <div className="amount-presets">
                    {presetAmounts.map((preset, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`amount-preset ${amount === preset.toString() ? 'selected' : ''} ${preset === 'Other' ? 'other' : ''}`}
                        onClick={() => preset === 'Other' ? setAmount('') : setAmount(preset.toString())}
                      >
                        {preset === 'Other' ? 'Other' : `₹${preset.toLocaleString()}`}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    required
                    min="100"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Personal Blessing or Message (Optional)
                    <span className="optional"> - This message will be shared with the monasteries</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a prayer, blessing, or message for the monks..."
                    rows="3"
                  />
                </div>

                <div className="donation-summary">
                  <div className="summary-item">
                    <span>Selected Cause:</span>
                    <span>{selectedCauseData?.title}</span>
                  </div>
                  <div className="summary-item">
                    <span>Your Offering:</span>
                    <span className="donation-amount">₹{amount ? parseInt(amount).toLocaleString() : '0'}</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Processing Your Sacred Offering...
                    </>
                  ) : (
                    `Make Sacred Offering of ₹${amount ? parseInt(amount).toLocaleString() : '0'}`
                  )}
                </button>

                <div className="security-notice">
                  <div className="lock-icon">🔒</div>
                  <span>Your donation is secure and encrypted. 100% of funds go directly to support Sikkim's monasteries.</span>
                </div>
              </form>
            </div>

            {/* Testimonials */}
            <div className="testimonials-section">
              <h3>Blessings from Our Supporters</h3>
              <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-amount">{testimonial.amount}</div>
                    <p>"{testimonial.message}"</p>
                    <div className="testimonial-author">- {testimonial.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Visualization */}
          <div className="impact-section">
            <h2>Your Impact in Action</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">🕯️</div>
                <h4>₹500</h4>
                <p>Provides butter lamps for one monastery for a week</p>
              </div>
              <div className="impact-item">
                <div className="impact-icon">📖</div>
                <h4>₹1,000</h4>
                <p>Preserves ancient scriptures for future generations</p>
              </div>
              <div className="impact-item">
                <div className="impact-icon">🍚</div>
                <h4>₹2,000</h4>
                <p>Feeds 10 monks for an entire month</p>
              </div>
              <div className="impact-item">
                <div className="impact-icon">🏛️</div>
                <h4>₹5,000</h4>
                <p>Helps maintain sacred monastery structures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donations;

