import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Sikkim Tourism</h2>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#places">Places</a></li>
          <li><a href="#culture">Culture</a></li>
          <li><a href="#clothing">Clothing</a></li>
          <li><a href="#cuisines">Cuisines</a></li>
          <li><a href="#teachings">Teachings</a></li>          
          <li><a href="#audios">Buddhist Audios</a></li>
          <li><a href="#map">Tourist Map</a></li>
          <li><a href="#festivals">Festivals</a></li>
          <li><a href="#calendar">Cultural Calendar</a></li>
          <li><a href="#donations">Donations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
