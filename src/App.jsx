import React from "react";
import { useState, createContext } from "react";

import "./index.css";
import MainContent from "./MainContent";

export const ThemeChildContent = createContext();

export default function App() {
  const [themeChildContent, setThemeChildContent] = useState("");
  const [themeOption, setThemeOption] = useState("");

  const handleChangeTheme = (id) => {
    if (id == 1) {
      setThemeOption("white");
      setThemeChildContent("white");
    }
    if (id == 2) {
      setThemeOption("green");
      setThemeChildContent("green");
    }
    if (id == 3) {
      setThemeOption("blue");
      setThemeChildContent("blue");
    }
  };
  return (
    <ThemeChildContent.Provider value={themeChildContent}>
      <>
        <div className="dropdown">
          <button className="dropbtn">Change Theme ChildComponent</button>
          <div className="dropdown-content">
            <a
              href="#"
              onClick={() => handleChangeTheme(1)}
              style={{ backgroundColor: themeOption }}
            >
              white (default)
            </a>
            <a
              href="#"
              onClick={() => handleChangeTheme(2)}
              style={{ backgroundColor: themeOption }}
            >
              green
            </a>
            <a
              href="#"
              onClick={() => handleChangeTheme(3)}
              style={{ backgroundColor: themeOption }}
            >
              blue
            </a>
          </div>
        </div>
        <MainContent />
      </>
    </ThemeChildContent.Provider>
  );
}
