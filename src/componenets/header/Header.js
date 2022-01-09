import React, { useState } from "react";
import { Link } from "react-router-dom";

// Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../Theme/GlobalStyles";
import { lightTheme, darkTheme } from "../../Theme/Theme";

import "./header.scss";

function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null ? "dark" : localStorage.getItem("theme")
  );

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header>
        <div className="container">
          <div className="header-wrapper">
            <Link to="/" className="web-title">
              GitHub Lookup
            </Link>
            <div className="web-theme">
              <i className="fas fa-sun"></i>
              <div className={"theme_slider " + theme} onClick={handleToggle}>
                <div className={"slider round dark_sl " + theme}></div>
              </div>
              <i className="fas fa-moon"></i>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Header;
