import { useContext } from "react";
import { DarkModeContext } from "../App";
export default function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <header>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️" : "🌑"}
      </button>
    </header>
  );
}
