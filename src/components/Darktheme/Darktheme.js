import React from 'react';
import './Darktheme.css';

// set the theme to dark
const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

// set the theme to light
const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

//now toggle between them
const toggleTheme= (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };



const Darktheme = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default Darktheme;
