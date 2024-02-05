import { useState } from "react";
import Profile from "./components/profile";
import Repo from "./components/repository";
import Readme from "./components/readme";
import Nav from "./components/nav";
import { ThemeProvider, useTheme } from "./components/theme";
import "./App.css";
import ThemeSwitcher from "./components/themebtn";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className={isDarkMode ? "dark" : "light"}>
        <div className="top">
          <Nav />
          <ThemeSwitcher />
        </div>

        <h4>Repositories</h4>

        <div className="user">
          <Profile />
          <div className="repo">
            <Readme />
            <Repo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
