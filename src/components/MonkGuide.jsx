import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from './AuthContext';
import './MonkGuide.css';

const MonkGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      text: user 
        ? `Namaste, ${user.name}! I sense you're seeking something deeper. What weighs on your heart today?`
        : "Namaste, seeker. I see the questions in your eyes. The mountains have answers - what would you ask?",
      sender: 'monk'
    };
    setMessages([welcomeMessage]);
  }, [user]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced AI responses with spiritual guidance
  const generateMonkResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Spiritual and emotional guidance
    if (lowerMessage.includes('lost') || lowerMessage.includes('direction') || 
        lowerMessage.includes('purpose') || lowerMessage.includes('path')) {
      return [
        "Ah, the feeling of being lost... even the mightiest rivers begin as small streams unsure of their path.",
        "When you feel lost, remember: the mountain does not judge the fog that surrounds it. The fog will lift.",
        "In Sikkim, we say: 'The path appears when you stop searching for it.' Sit with yourself at Rumtek Monastery.",
        "Your feeling of being lost is not emptiness - it is space for new beginnings. Visit Tsomgo Lake at sunrise.",
        "The prayer flags flutter not to show the wind's direction, but to remind us that movement itself is purpose."
      ];
    }

    if (lowerMessage.includes('sad') || lowerMessage.includes('depress') || 
        lowerMessage.includes('happy') || lowerMessage.includes('peace')) {
      return [
        "Happiness is like these Himalayan peaks - sometimes visible, sometimes hidden in clouds, but always present.",
        "The monks at Pemayangtse Monastery teach: 'Do not seek to remove the clouds, but expand your sky.'",
        "When sadness visits, welcome it like an old friend. Sit with it at Enchey Monastery - even shadows need light.",
        "Peace is not the absence of storms, but the stillness within them. Listen to the prayer wheels at MG Marg."
      ];
    }

    if (lowerMessage.includes('stress') || lowerMessage.includes('anxious') || 
        lowerMessage.includes('worr') || lowerMessage.includes('calm')) {
      return [
        "Anxiety is the mind climbing mountains that do not exist. Breathe with the rhythm of the Teesta River.",
        "In our monasteries, we learn: 'Today's worries are tomorrow's prayer flags - they too shall pass.'",
        "Walk the forest trails of Yumthang Valley. Let the rhododendrons teach you about blooming without hurry.",
        "The only moment that truly exists is this breath. And this one. Come, let us breathe together."
      ];
    }

    if (lowerMessage.includes('future') || lowerMessage.includes('tomorrow') || 
        lowerMessage.includes('what should i do')) {
      return [
        "The future is like the mist over Kanchenjunga - it reveals itself only when you stop trying to see through it.",
        "Do not ask what you should do. Ask what makes your soul feel like the first sunlight on Tsomgo Lake.",
        "The prayer wheels turn not to change the future, but to remind us that every moment is already complete.",
        "Your path will unfold like the valleys of North Sikkim - one step, one view at a time. Trust the journey."
      ];
    }

    if (lowerMessage.includes('love') || lowerMessage.includes('heart') || 
        lowerMessage.includes('relationship') || lowerMessage.includes('family')) {
      return [
        "Love is the unspoken prayer between two souls. Like the twin peaks of Siniolchu, connected at the base.",
        "A heart that loves is like Gangtok - vibrant, layered, and beautiful in its complexity.",
        "In relationships, be like the bridges over Teesta - strong enough to hold, flexible enough to sway.",
        "Family is the monastery that shelters your soul. Honor them as we honor our ancient traditions."
      ];
    }

    if (lowerMessage.includes('work') || lowerMessage.includes('career') || 
        lowerMessage.includes('job') || lowerMessage.includes('money')) {
      return [
        "Your work should be like the prayer flags - colorful, purposeful, and touching the divine.",
        "Money is the river, but purpose is the mountain. Which do you want to be?",
        "The craftsmen of Sikkim do not rush their thangkas. Your career too is a sacred painting.",
        "Find work that makes your soul feel like the morning chant at Rumtek - in harmony with the universe."
      ];
    }

    // Sikkim-specific guidance
    if (lowerMessage.includes('visit') || lowerMessage.includes('place') || 
        lowerMessage.includes('see') || lowerMessage.includes('travel')) {
      return [
        "Visit Rumtek Monastery not as a tourist, but as a seeker. Sit in silence and listen to what the ancient walls whisper.",
        "Go to Tsomgo Lake before dawn. Watch how the first light transforms the water - much like it can transform a soul.",
        "Walk the Nathula Pass slowly. Each step is a meditation, each breath a prayer in the thin mountain air.",
        "Spend a day in Lachung Valley. Let the waterfalls teach you about letting go and flowing with grace."
      ];
    }

    if (lowerMessage.includes('monastery') || lowerMessage.includes('temple') || 
        lowerMessage.includes('pray') || lowerMessage.includes('meditate')) {
      return [
        "When you enter a monastery, leave your questions at the door. The answers will find you in the silence.",
        "Meditation is not about emptying the mind, but about becoming the sky that holds all thoughts.",
        "At Pemayangtse, we learn that prayer is not asking for things, but remembering what we already have.",
        "The prayer wheels turn clockwise not to send prayers outward, but to bring peace inward."
      ];
    }

    if (lowerMessage.includes('food') || lowerMessage.includes('eat') || 
        lowerMessage.includes('cuisine') || lowerMessage.includes('momos')) {
      return [
        "Eating momos is a meditation. Notice the delicate folds, the steam rising like morning prayers.",
        "Sikkimese food teaches balance - spicy, sour, sweet, bitter. Like life itself.",
        "Share thukpa with strangers. The warmth of the soup mirrors the warmth of human connection.",
        "When you drink tongba, sip slowly. Each taste is a lesson in patience and appreciation."
      ];
    }
    // Cultural Preservation - Simple everyday keywords
if (lowerMessage.includes('old') || lowerMessage.includes('history') || 
    lowerMessage.includes('story') || lowerMessage.includes('past')) {
  return [
    "Every old monastery holds stories written in butter lamps and incense. Come, listen to what walls remember.",
    "The past lives in our grandmother's recipes, our father's songs. Cook momos together, preserve memories.",
    "At Rumtek, ancient texts speak to modern hearts. History is not dead - it breathes through tradition.",
    "Our ancestors painted thangkas with prayers, not just colors. Their stories flow through every brushstroke."
  ];
}

if (lowerMessage.includes('forget') || lowerMessage.includes('remember') || 
    lowerMessage.includes('memory')) {
  return [
    "What we forget, we lose forever. Teach your children the songs your grandmother sang to you.",
    "Memory lives in the hands that weave, the lips that sing. Practice tradition - it's remembering with action.",
    "The prayer wheels turn so we don't forget. Spin them, and remember who we are, where we came from.",
    "Each festival we celebrate is a memory we refuse to forget. Dance, so your children will remember."
  ];
}

if (lowerMessage.includes('language') || lowerMessage.includes('speak') || 
    lowerMessage.includes('word') || lowerMessage.includes('tongue')) {
  return [
    "When we lose our language, we lose how our ancestors named the stars. Speak Lepcha, speak Bhutia, speak home.",
    "Every word in your mother tongue carries mountains and rivers. Don't let English steal your soul's vocabulary.",
    "The elders speak languages that hold forest secrets. Listen now, before silence replaces wisdom.",
    "Your grandmother's words are bridges to the past. Cross them often, teach your children the way."
  ];
}

if (lowerMessage.includes('young') || lowerMessage.includes('children') || 
    lowerMessage.includes('kids') || lowerMessage.includes('next generation')) {
  return [
    "Show children how to fold prayer flags. Small hands learning old ways - this is how culture survives.",
    "Young people learn thangka painting at government centers. Ancient art, modern hands, timeless beauty.",
    "Take your kids to monastery festivals. Let them see masked dances, not just phones and screens.",
    "The future remembers only what the present teaches. Be the bridge between grandparents and grandchildren."
  ];
}

if (lowerMessage.includes('art') || lowerMessage.includes('painting') || 
    lowerMessage.includes('craft') || lowerMessage.includes('handmade')) {
  return [
    "A handmade carpet takes months to weave. Each knot is patience, each thread is prayer, each color is tradition.",
    "Thangka paintings are not just art - they are meditation made visible. Visit Gangtok's art centers to witness miracles.",
    "When you buy machine-made, tradition dies a little. Choose handcrafted - every purchase is a vote for heritage.",
    "The wood carver's hands remember what books never taught. Watch them work, see knowledge flow through fingers."
  ];
}

if (lowerMessage.includes('ancestors') || lowerMessage.includes('grandfather') || 
    lowerMessage.includes('grandmother') || lowerMessage.includes('elder')) {
  return [
    "Your grandmother's stories are more valuable than gold. Sit with her, record her voice, preserve her wisdom.",
    "The elders know which plants heal, which prayers protect. Their knowledge dies when we stop asking questions.",
    "Ancestors speak through temple bells and festival drums. Listen with your heart, not just your ears.",
    "What our grandfathers built with hands, we must protect with heart. Honor the old, inspire the young."
  ];
}

if (lowerMessage.includes('change') || lowerMessage.includes('modern') || 
    lowerMessage.includes('development') || lowerMessage.includes('progress')) {
  return [
    "Progress without roots creates empty towers. Build forward, but don't forget to look back and honor tradition.",
    "Modern life is fast, but some things need slowness - weaving, painting, prayer. Balance speed with soul.",
    "We can have smartphones AND prayer wheels. Development doesn't mean abandoning what makes us, us.",
    "Change the tools, not the values. Use technology to preserve, not replace, the wisdom of ages."
  ];
}

if (lowerMessage.includes('teach') || lowerMessage.includes('learn') || 
    lowerMessage.includes('school') || lowerMessage.includes('education')) {
  return [
    "Schools now teach local languages and culture. When classrooms honor heritage, children learn to value roots.",
    "Learning grandmother's recipe is education too. Not all wisdom comes from textbooks and classrooms.",
    "Teach children why we celebrate, not just how. Understanding creates carriers of culture, not just observers.",
    "The best education teaches both science and songs, both English and the language of your ancestors."
  ];
}

if (lowerMessage.includes('festival') || lowerMessage.includes('celebrate') || 
    lowerMessage.includes('dance') || lowerMessage.includes('ritual')) {
  return [
    "Every festival is a classroom without walls. Dance Pang Lhabsol, celebrate Losar, remember why we gather together.",
    "The masked dances tell stories older than your great-grandfather. Watch closely - history is dancing before you.",
    "Rituals seem strange until you know their meaning. Ask the elders why we do what we do.",
    "Bhumchu festival at Tashiding reveals the water that predicts our future. Ancient prophecy, living tradition."
  ];
}

if (lowerMessage.includes('nature') || lowerMessage.includes('mountain') || 
    lowerMessage.includes('forest') || lowerMessage.includes('environment')) {
  return [
    "Our ancestors knew - protect nature, protect culture. The forest teaches what the classroom cannot.",
    "Sacred mountains aren't just scenery - they are family. Kanchenjunga is grandfather, guardian, god to us.",
    "When we lose forests, we lose medicines, stories, spirits. Environmental care is cultural preservation.",
    "The Lepchas say we belong to nature, not nature to us. This wisdom kept forests alive for centuries."
  ];
}

if (lowerMessage.includes('tourist') || lowerMessage.includes('visitor') || 
    lowerMessage.includes('travel') || lowerMessage.includes('photo')) {
  return [
    "Welcome tourists, but teach them respect. Monasteries are homes of prayer, not just photo opportunities.",
    "Buy authentic crafts from local artisans. Your money preserves livelihood, livelihood preserves tradition.",
    "Take photos, but ask permission first. The monk you photograph is someone's teacher, someone's grandfather.",
    "Tourism can save or destroy culture. Choose guides who explain, not just show. Understanding preserves heritage."
  ];
}

if (lowerMessage.includes('government') || lowerMessage.includes('support') || 
    lowerMessage.includes('help') || lowerMessage.includes('fund')) {
  return [
    "The government trains youth in traditional crafts with free stipends. Heritage preservation starts with economic support.",
    "Cultural centers preserve manuscripts, teach languages, document dying arts. Progress needs planning and patience.",
    "Sacred sites are now legally protected. When law meets love for heritage, culture has fighting chance.",
    "Financial help exists for artists and tradition-bearers. Apply, learn, create - make heritage your livelihood too."
  ];
}

if (lowerMessage.includes('music') || lowerMessage.includes('song') || 
    lowerMessage.includes('sing') || lowerMessage.includes('instrument')) {
  return [
    "Traditional songs carry histories that textbooks miss. Sing the old melodies - your voice is a time machine.",
    "The damphu drum beats like grandmother's heartbeat. Learn to play it, keep that heartbeat alive.",
    "Every community has songs for planting, harvesting, celebrating. These are calendars and culture combined together.",
    "Monastery music isn't just sound - it's sacred vibration. Long horns, drums, chants: hear the ancient speaking."
  ];
}
// Why visit Sikkim - VERY SHORT (50-70 chars)
if (lowerMessage.includes('why sikkim') || lowerMessage.includes('why visit') || 
    lowerMessage.includes('should i go') || lowerMessage.includes('worth visiting')) {
  return [
    "Kanchenjunga stands here - third highest peak on Earth.",
    "Come stand where sky touches sacred stone.",
    "Sikkim gives peace cities stole. Find yourself again.",
    "Glacial lakes, rhododendron forests, Buddhist chants.",
    "Three cultures, one harmony. Taste unity here.",
    "Trek, raft, paraglide. Adventure calls your name.",
    "Seven climate zones in one tiny state.",
    "Where nature and spirit weave together beautifully."
  ];
}

if (lowerMessage.includes('what to do') || lowerMessage.includes('activities') || 
    lowerMessage.includes('things to see') || lowerMessage.includes('attractions')) {
  return [
    "Trek Kanchenjunga, meditate at Rumtek, eat momos.",
    "Raft Teesta, ride cable cars, sip mountain tea.",
    "Walk Yumthang Valley when flowers bloom everywhere.",
    "Attend Losar dances or Pang Lhabsol festival.",
    "Visit Zero Point where roads end, silence begins.",
    "Explore ancient monasteries holding centuries of wisdom.",
    "Paraglide from peaks or watch clouds from cafés.",
    "Homestay in villages, learn crafts, hear stories."
  ];
}

if (lowerMessage.includes('when to visit') || lowerMessage.includes('best time') || 
    lowerMessage.includes('season') || lowerMessage.includes('weather')) {
  return [
    "March-June: clear skies, rhododendrons blooming.",
    "October-December: crisp air, snow-covered peaks.",
    "Monsoon: misty trails, solitude, brave adventurers.",
    "Spring shows flowers. Autumn shows clarity."
  ];
}

// Insects - VERY SHORT
if (lowerMessage.includes('insects') || lowerMessage.includes('bugs') || 
    lowerMessage.includes('eat insects') || lowerMessage.includes('crickets') || 
    lowerMessage.includes('grasshopper')) {
  return [
    "Yes, Lepchas eat roasted grasshoppers and beetles.",
    "Ancient insect protein meets modern curiosity here.",
    "In Dzongu villages, this is traditional forest food.",
    "Not common. Only specific tribal communities eat.",
    "Tourist restaurants serve momos, not bugs.",
    "Try village homestays if you're feeling adventurous.",
    "High-protein, sustainable, ancient Lepcha practice.",
    "Most Sikkimese eat regular food like everyone."
  ];
}

if (lowerMessage.includes('traditional food') || lowerMessage.includes('local food') || 
    lowerMessage.includes('what to eat') || lowerMessage.includes('cuisine')) {
  return [
    "Try momos, thukpa, gundruk soup. Pure mountain food.",
    "Phagshapa pork, kinema soybeans, chhurpi cheese.",
    "Tibetan, Nepali, Lepcha flavors mixed together.",
    "Wild ferns, bamboo shoots, organic vegetables.",
    "Healthy, steamed, never fried. Eat without guilt.",
    "Tongba warms cold nights and brings people together.",
    "Gundruk has probiotics mountains knew long ago.",
    "Chhurpi cheese - hard as rock, flavorful as memories."
  ];
}

if (lowerMessage.includes('weird food') || lowerMessage.includes('unusual') || 
    lowerMessage.includes('strange food') || lowerMessage.includes('exotic')) {
  return [
    "Bamboo worms and beetles are Lepcha tribal food.",
    "Fermented gundruk seems strange but heals bodies.",
    "Sikkim's weird is just traditional mountain wisdom.",
    "Hard chhurpi breaks teeth. Grate it like locals.",
    "Strange foods heal - fermented sinki aids digestion."
  ];
}


    // Default philosophical responses
    const philosophicalResponses = [
      "The mountains have stood for millennia, yet they still learn from the passing clouds. What can they teach you today?",
      "In the silence between your thoughts, that is where you'll find the answers you seek.",
      "A river does not try to be the ocean. It simply flows. What is your natural flow?",
      "The prayer flags do not hold onto the wind. They let it pass through, creating beautiful movement.",
      "When you look at Kanchenjunga, do you see a mountain, or do you see eternity wearing stone?",
      "The mist does not obscure the mountain - it reveals the space between seeing and knowing.",
      "In our monasteries, we say: 'The question is the path, the answer is the traveler.'",
      "Your journey is unique as a snowflake, yet connected as the Himalayan range."
    ];

    return philosophicalResponses;
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Generate AI response with delay
    setTimeout(() => {
      const possibleResponses = generateMonkResponse(inputValue);
      const monkResponse = getRandomResponse(possibleResponses);
      
      const newMonkMessage = {
        id: messages.length + 2,
        text: monkResponse,
        sender: 'monk'
      };
      
      setMessages(prev => [...prev, newMonkMessage]);
      setIsTyping(false);
    }, 2000 + Math.random() * 1000); // Random delay for natural feel
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="monk-guide-container">
      {/* Monk Icon with Persistent Tooltip */}
      <div 
        className="monk-icon"
        onClick={toggleChat}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="monk-avatar">
          <div className="monk-image-placeholder">
            <img src="/images/monke.jpg" alt="Monk Guide" className="monk-face" />
          </div>
        </div>
        
        {/* Persistent Tooltip - Always in DOM, controlled by opacity */}
        <div className={`tooltip ${showTooltip ? 'tooltip-visible' : ''}`}>
          Hi, I'm Monke! {user ? `Your spiritual guide, ${user.name}` : 'Your path awaits. Click to begin.'}
        </div>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="monk-guide">
          <div className="monk-header">
            <div className="monk-info">
              <div className="monk-name">Monk Guide {user && `• ${user.name}`}</div>
              <div className="monk-status">
                {user ? 'Personal Spiritual Guide' : 'Guest Seeker'} • Online
              </div>
            </div>
            <button className="close-button" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chat-container">
            <div className="messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender === 'user' ? 'user-message' : 'monk-message'}`}
                >
                  {message.text}
                </div>
              ))}
              
              {isTyping && (
                <div className="message monk-message typing-indicator">
                  <div className="typing-text">The monk is contemplating...</div>
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask for spiritual guidance..."
                className="chat-input"
              />
              <button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim()}
                className="send-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonkGuide;