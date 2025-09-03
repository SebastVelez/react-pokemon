import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { createContext, useState } from "react";

const studentsList = [
  {
    name: "Ismael",
    number: 1,
  },
  {
    name: "Jacobo",
    number: 4,
  },
  {
    name: "Paco",
    number: 7,
  },
  {
    name: "Paola",
    number: 25,
  },
  {
    name: "Victor",
    number: 151,
  },
];

export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode && "darkMode"}`}>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
        <Main list={studentsList} />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
