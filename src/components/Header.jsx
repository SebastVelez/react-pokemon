import { useContext } from "react";
import { DarkModeContext } from "../App";

export default function Header() {
  const { setIsDarkMode, isDarkMode } = useContext(DarkModeContext);
  return (
    <header>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {!isDarkMode ? "🌑" : "☀️"}
      </button>
    </header>
  );
}
