import React, { useState } from "react";
import "./Keyboard.scss";
import { computerKeypad } from "./common";

const navKeys = [];
const arrowKeys = [];

const KeyButton = ({ keyName, currentKey, extraClass }) => {
  const isSelected = currentKey?.toUpperCase() === keyName?.toUpperCase();
  const baseClass = `key-button ${isSelected ? "text-primary selected-key" : ""}`;
  
  const getClassNames = () => {
    switch (keyName) {
      case "Backspace":
        return `${baseClass} backspace-key shift-key`;
      case "Tab":
        return `${baseClass} tab-key`;
      case "Caps Lock":
        return `${baseClass} capslock-key`;
      case "Enter":
        return `${baseClass} enter-key`;
      case "Shift":
        return `${baseClass} shift-key`;
      case "Space":
        return `${baseClass} space-button`;
      default:
        return `${baseClass} ${extraClass || ""}`;
    }
  };

  return <button className={getClassNames()}>{keyName}</button>;
};

const KeyRow = ({ keys, currentKey }) => (
  <div className="keyboard-row">
    {keys.map((key, index) => (
      <KeyButton key={index} keyName={key} currentKey={currentKey} />
    ))}
  </div>
);

const Keyboard = ({ currentKey }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Switch to {isDarkTheme ? "Light" : "Dark"} Theme
      </button>
      <div className="keyboard-container mt-3">
        <div className="main-keys">
          {computerKeypad && computerKeypad.map((row, rowIndex) => (
            <KeyRow key={rowIndex} keys={row} currentKey={currentKey} />
          ))}
        </div>
        <div className="extra-keys">
          <div className="nav-keys d-flex">
            {navKeys.map((row, rowIndex) => (
              <KeyRow key={rowIndex} keys={row} currentKey={currentKey} />
            ))}
          </div>
          <div className="arrow-keys">
            {arrowKeys.map((row, rowIndex) => (
              <KeyRow key={rowIndex} keys={row} currentKey={currentKey} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
