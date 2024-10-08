import React from "react";

const mainKeys = [
  [
    "~",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Menu", "Ctrl"],
];

const navKeys = [];

const arrowKeys = [];

const Keyboard = ({ currentKey }) => {
  return (
    <div className="keyboard-container mt-3">
      <div className="main-keys">
        {mainKeys.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key, keyIndex) => {
              return (
                <button
                  key={keyIndex}
                  className={`key-button ${
                    currentKey?.toUpperCase() === key?.toUpperCase()
                      ? "text-primary selected-key"
                      : ""
                  } ${key === "Backspace" ? "backspace-key" : ""} ${
                    key === "Tab" ? "tab-key" : ""
                  } ${key === "Caps Lock" ? "capslock-key" : ""} ${
                    key === "Enter" ? "enter-key" : ""
                  } ${key === "Shift" ? "shift-key" : ""} 
                  ${key === "Backspace" ? "shift-key" : ""}
                  ${key === "Space" ? "space-button" : ""}`}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="extra-keys">
        <div className="nav-keys d-flex">
          {navKeys.map((row, rowIndex) => (
            <div key={rowIndex} className="keyboard-row">
              {row.map((key, keyIndex) => (
                <button
                  key={keyIndex}
                  className={`key-button special-key ${
                    currentKey?.toUpperCase() === key
                      ? "text-primary selected-key"
                      : ""
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="arrow-keys">
          {arrowKeys.map((row, rowIndex) => (
            <div key={rowIndex} className="keyboard-row">
              {row.map((key, keyIndex) => (
                <button
                  key={keyIndex}
                  className={`key-button special-key ${
                    currentKey?.toUpperCase() === key
                      ? "text-primary selected-key"
                      : ""
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
