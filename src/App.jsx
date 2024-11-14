import "./App.css";
import Main from "./components/Main";
import PokemonLogin from "./components/PokemonLogin";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import { createContext, useState } from "react";
const studentsList = [
  {
    name: "Itzel",
    number: 1,
  },
  {
    name: "Gabriela",
    number: 4,
  },
  {
    name: "Lina",
    number: 7,
  },
  {
    name: "May",
    number: 25,
  },
  {
    name: "Maria",
    number: 151,
  },
  {
    name: "Diego",
    number: 200,
  },
];

export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // esta en modo oscuro? -> true / false

  return (
    <>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
        <Routes>
          <Route path="/login" element={<PokemonLogin />} />
          <Route path="/" element={<Main list={studentsList} />} />
        </Routes>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
