import React from "react";
import { useTheme } from "./theme";
function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>{isDarkMode ? "Dark" : "Light"}</button>
    </div>
  );
}

export default ThemeSwitcher;
