import React, { useState } from 'react';
import './CulturalCalendar.css';

const CulturalCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'list'
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Festivals data from Festivals.jsx
  const festivals = [
    {
      id: 1,
      name: "Losar",
      type: "Tibetan New Year",
      date: new Date(2025, 1, 21), // February 21, 2025
      duration: "15 days",
      description: "The Tibetan New Year celebration marking the beginning of the lunar calendar, celebrated with great enthusiasm across Sikkim.",
      activities: ["Traditional Cham dances", "Butter lamp lighting", "Family gatherings", "Special prayers"],
      category: "buddhist",
      significance: "Welcoming new year and driving away evil spirits"
    },
    {
      id: 2,
      name: "Saga Dawa",
      type: "Buddhist Festival",
      date: new Date(2025, 4, 15), // May 15, 2025
      duration: "1 month",
      description: "Triple blessed festival commemorating Buddha's birth, enlightenment, and parinirvana.",
      activities: ["Prayer flag hoisting", "Circumambulation", "Butter lamp offerings", "Charity activities"],
      category: "buddhist",
      significance: "Celebrating Buddha's life events"
    },
    {
      id: 3,
      name: "Dasain",
      type: "Hindu Festival",
      date: new Date(2025, 9, 5), // October 5, 2025
      duration: "15 days",
      description: "The greatest Hindu festival celebrating the victory of good over evil.",
      activities: ["Ghatasthapana", "Fulpati offerings", "Tika ceremony", "Family reunions"],
      category: "hindu",
      significance: "Victory of Goddess Durga over demon Mahishasura"
    },
    {
      id: 4,
      name: "Tihar",
      type: "Festival of Lights",
      date: new Date(2025, 10, 8), // November 8, 2025
      duration: "5 days",
      description: "Five-day Hindu festival of lights celebrating human-animal relationships.",
      activities: ["Kag Tihar", "Kukur Tihar", "Laxmi Puja", "Bhai Tika"],
      category: "hindu",
      significance: "Worshipping different aspects of life and relationships"
    },
    {
      id: 5,
      name: "Bumchu",
      type: "Sacred Water Festival",
      date: new Date(2025, 1, 28), // February 28, 2025
      duration: "1 day",
      description: "Unique festival at Tashiding Monastery where sacred water predicts the year's fortune.",
      activities: ["Opening sealed vessel", "Water level observation", "Blessing distribution"],
      category: "buddhist",
      significance: "Predicting annual fortunes through sacred water"
    },
    {
      id: 6,
      name: "Pang Lhabsol",
      type: "Warrior God Festival",
      date: new Date(2025, 7, 25), // August 25, 2025
      duration: "3 days",
      description: "Unique Sikkimese festival worshipping Mount Kanchenjunga as the guardian deity.",
      activities: ["Masked dances", "Warrior god invocation", "Traditional offerings"],
      category: "buddhist",
      significance: "Worshipping Kanchenjunga and commemorating historical treaty"
    },
    {
      id: 7,
      name: "Maghe Sankranti",
      type: "Harvest Festival",
      date: new Date(2025, 0, 14), // January 14, 2025
      duration: "1 day",
      description: "Makar Sankranti celebration marking the sun's transition into Capricorn.",
      activities: ["Holy river bathing", "Sesame seed sweets", "Family feasts"],
      category: "hindu",
      significance: "Winter solstice celebration and thanksgiving"
    },
    {
      id: 8,
      name: "Flower Festival",
      type: "Spring Celebration",
      date: new Date(2025, 2, 20), // March 20, 2025
      duration: "7 days",
      description: "Celebration of Sikkim's rich floral biodiversity with rhododendron displays.",
      activities: ["Flower exhibitions", "Gardening competitions", "Nature walks"],
      category: "seasonal",
      significance: "Promoting floral biodiversity and tourism"
    },
    {
      id: 9,
      name: "Winter Festival",
      type: "Tourism Festival",
      date: new Date(2025, 11, 20), // December 20, 2025
      duration: "10 days",
      description: "Promotion of winter tourism with adventure sports and cultural events.",
      activities: ["Adventure sports", "Local handicraft exhibitions", "Food festivals"],
      category: "seasonal",
      significance: "Promoting winter tourism and local culture"
    }
  ];

  // Get festivals for selected date
  const getFestivalsForDate = (date) => {
    return festivals.filter(festival => 
      festival.date.getDate() === date.getDate() &&
      festival.date.getMonth() === date.getMonth() &&
      festival.date.getFullYear() === date.getFullYear()
    );
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      buddhist: '#2c5530',
      hindu: '#dc3545',
      seasonal: '#fd7e14',
      cultural: '#6f42c1'
    };
    return colors[category] || '#6c757d';
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      buddhist: '🕉️',
      hindu: '🪔',
      seasonal: '🌸',
      cultural: '🎭'
    };
    return icons[category] || '🎉';
  };

  // Calendar navigation
  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - 1, prevMonthDays - i);
      days.push({ date, isCurrentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      days.push({ date, isCurrentMonth: true });
    }

    // Next month days
    const totalCells = 42; // 6 weeks
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      days.push({ date, isCurrentMonth: false });
    }

    return days;
  };

  // Upcoming festivals (next 30 days)
  const upcomingFestivals = festivals
    .filter(festival => {
      const today = new Date();
      const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
      return festival.date >= today && festival.date <= thirtyDaysFromNow;
    })
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  // All festivals sorted by date
  const allFestivals = [...festivals].sort((a, b) => a.date - b.date);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="sikkim-cultural-calendar">
      {/* Hero Section */}
      <div className="sikkim-calendar-hero">
        <div className="sikkim-hero-overlay"></div>
        <div className="sikkim-hero-content">
          <h1 className="sikkim-calendar-title">Cultural Festival Calendar</h1>
          <p className="sikkim-calendar-subtitle">Plan your Sikkim journey around these vibrant cultural celebrations</p>
        </div>
      </div>

      <div className="sikkim-calendar-container">
        <div className="sikkim-container">
          {/* View Toggle */}
          <div className="sikkim-view-toggle">
            <button
              className={`sikkim-toggle-btn ${viewMode === 'calendar' ? 'sikkim-active' : ''}`}
              onClick={() => setViewMode('calendar')}
            >
              📅 Calendar View
            </button>
            <button
              className={`sikkim-toggle-btn ${viewMode === 'list' ? 'sikkim-active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List View
            </button>
          </div>

          <div className="sikkim-calendar-content">
            {/* Main Calendar/List Section */}
            <div className="sikkim-main-section">
              {viewMode === 'calendar' ? (
                <div className="sikkim-calendar-wrapper">
                  <div className="sikkim-react-calendar">
                    <div className="sikkim-calendar-header">
                      <h3 className="sikkim-calendar-heading">Festival Calendar {currentYear}</h3>
                      <div className="sikkim-legend">
                        <div className="sikkim-legend-item">
                          <span className="sikkim-legend-dot sikkim-buddhist"></span>
                          Buddhist
                        </div>
                        <div className="sikkim-legend-item">
                          <span className="sikkim-legend-dot sikkim-hindu"></span>
                          Hindu
                        </div>
                        <div className="sikkim-legend-item">
                          <span className="sikkim-legend-dot sikkim-seasonal"></span>
                          Seasonal
                        </div>
                      </div>
                    </div>
                    
                    {/* Custom Calendar Implementation */}
                    <div className="sikkim-custom-calendar">
                      <div className="sikkim-calendar-grid">
                        {/* Month Header */}
                        <div className="sikkim-month-header">
                          <button 
                            className="sikkim-nav-btn"
                            onClick={() => navigateMonth('prev')}
                          >
                            ‹
                          </button>
                          <h4 className="sikkim-month-title">
                            {monthNames[currentMonth]} {currentYear}
                          </h4>
                          <button 
                            className="sikkim-nav-btn"
                            onClick={() => navigateMonth('next')}
                          >
                            ›
                          </button>
                        </div>
                        
                        {/* Week Days */}
                        <div className="sikkim-week-days">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="sikkim-week-day">{day}</div>
                          ))}
                        </div>
                        
                        {/* Calendar Days */}
                        <div className="sikkim-calendar-days">
                          {generateCalendarDays().map((dayObj, index) => {
                            const { date, isCurrentMonth } = dayObj;
                            const dayFestivals = getFestivalsForDate(date);
                            const isToday = date.toDateString() === new Date().toDateString();
                            
                            return (
                              <div
                                key={index}
                                className={`sikkim-calendar-day ${isCurrentMonth ? 'sikkim-current-month' : 'sikkim-other-month'} ${isToday ? 'sikkim-today' : ''}`}
                                onClick={() => {
                                  if (isCurrentMonth) {
                                    setSelectedDate(date);
                                    if (dayFestivals.length > 0) {
                                      setSelectedFestival(dayFestivals[0]);
                                    }
                                  }
                                }}
                              >
                                <span className="sikkim-day-number">{date.getDate()}</span>
                                {dayFestivals.length > 0 && (
                                  <div className="sikkim-festival-indicators">
                                    {dayFestivals.map((festival, festIndex) => (
                                      <span
                                        key={festIndex}
                                        className="sikkim-festival-indicator"
                                        style={{ backgroundColor: getCategoryColor(festival.category) }}
                                        title={festival.name}
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Selected Date Info */}
                  <div className="sikkim-selected-date-info">
                    <h4 className="sikkim-selected-title">Selected: {selectedDate.toDateString()}</h4>
                    {getFestivalsForDate(selectedDate).length > 0 ? (
                      <div className="sikkim-date-festivals">
                        {getFestivalsForDate(selectedDate).map(festival => (
                          <div
                            key={festival.id}
                            className="sikkim-festival-preview"
                            onClick={() => setSelectedFestival(festival)}
                          >
                            <span
                              className="sikkim-category-marker"
                              style={{ backgroundColor: getCategoryColor(festival.category) }}
                            ></span>
                            <div className="sikkim-preview-content">
                              <h5 className="sikkim-preview-title">{festival.name}</h5>
                              <p className="sikkim-preview-type">{festival.type}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="sikkim-no-events">No festivals on this date</p>
                    )}
                  </div>
                </div>
              ) : (
                /* List View */
                <div className="sikkim-list-view">
                  <h3 className="sikkim-list-heading">All Festivals {currentYear}</h3>
                  <div className="sikkim-festivals-list">
                    {allFestivals.map(festival => (
                      <div
                        key={festival.id}
                        className="sikkim-festival-list-item"
                        onClick={() => setSelectedFestival(festival)}
                      >
                        <div
                          className="sikkim-category-icon"
                          style={{ backgroundColor: getCategoryColor(festival.category) }}
                        >
                          {getCategoryIcon(festival.category)}
                        </div>
                        <div className="sikkim-festival-info">
                          <h5 className="sikkim-festival-name">{festival.name}</h5>
                          <p className="sikkim-festival-type-text">{festival.type}</p>
                          <p className="sikkim-festival-date">
                            {festival.date.toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <div className="sikkim-festival-meta">
                          <span className="sikkim-duration">{festival.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Upcoming Festivals */}
            <div className="sikkim-sidebar">
              <div className="sikkim-upcoming-events">
                <h4 className="sikkim-upcoming-title">🎉 Upcoming Festivals</h4>
                <div className="sikkim-upcoming-list">
                  {upcomingFestivals.length > 0 ? (
                    upcomingFestivals.map(festival => (
                      <div
                        key={festival.id}
                        className="sikkim-upcoming-item"
                        onClick={() => setSelectedFestival(festival)}
                      >
                        <div
                          className="sikkim-upcoming-marker"
                          style={{ backgroundColor: getCategoryColor(festival.category) }}
                        ></div>
                        <div className="sikkim-upcoming-content">
                          <h6 className="sikkim-upcoming-name">{festival.name}</h6>
                          <p className="sikkim-upcoming-date">{festival.date.toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="sikkim-no-upcoming">No upcoming festivals in the next 30 days</p>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="sikkim-calendar-stats">
                <h4 className="sikkim-stats-title">📊 Festival Stats</h4>
                <div className="sikkim-stats-grid">
                  <div className="sikkim-stat-item">
                    <div className="sikkim-stat-number">{festivals.length}</div>
                    <div className="sikkim-stat-label">Total Festivals</div>
                  </div>
                  <div className="sikkim-stat-item">
                    <div className="sikkim-stat-number">
                      {festivals.filter(f => f.category === 'buddhist').length}
                    </div>
                    <div className="sikkim-stat-label">Buddhist</div>
                  </div>
                  <div className="sikkim-stat-item">
                    <div className="sikkim-stat-number">
                      {festivals.filter(f => f.category === 'hindu').length}
                    </div>
                    <div className="sikkim-stat-label">Hindu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festival Detail Modal */}
      {selectedFestival && (
        <div className="sikkim-modal-overlay" onClick={() => setSelectedFestival(null)}>
          <div className="sikkim-festival-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="sikkim-close-btn"
              onClick={() => setSelectedFestival(null)}
            >
              ×
            </button>
            
            <div className="sikkim-modal-header">
              <div className="sikkim-festival-category">
                <span
                  className="sikkim-category-badge"
                  style={{ backgroundColor: getCategoryColor(selectedFestival.category) }}
                >
                  {getCategoryIcon(selectedFestival.category)} {selectedFestival.category.toUpperCase()}
                </span>
              </div>
              <h2 className="sikkim-modal-title">{selectedFestival.name}</h2>
              <p className="sikkim-modal-subtitle">{selectedFestival.type}</p>
            </div>

            <div className="sikkim-modal-content">
              <div className="sikkim-festival-details">
                <div className="sikkim-detail-row">
                  <div className="sikkim-detail-item">
                    <strong>📅 Date:</strong>
                    <span>{selectedFestival.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="sikkim-detail-item">
                    <strong>⏱️ Duration:</strong>
                    <span>{selectedFestival.duration}</span>
                  </div>
                </div>

                <div className="sikkim-description-section">
                  <h4>About the Festival</h4>
                  <p>{selectedFestival.description}</p>
                </div>

                <div className="sikkim-significance-section">
                  <h4>Cultural Significance</h4>
                  <p>{selectedFestival.significance}</p>
                </div>

                <div className="sikkim-activities-section">
                  <h4>Main Activities</h4>
                  <div className="sikkim-activities-list">
                    {selectedFestival.activities.map((activity, index) => (
                      <span key={index} className="sikkim-activity-tag">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="sikkim-modal-footer">
              <button 
                className="sikkim-close-modal-btn"
                onClick={() => setSelectedFestival(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CulturalCalendar;