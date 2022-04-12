import React from 'react';
import './Darktheme.css';

/* NEW (START) */
const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const toggleTheme= (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.checked);
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

// setDark();

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
