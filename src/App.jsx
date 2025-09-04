import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import PokemonLogin from "./components/PokemonLogin";
import { createContext, useState, useEffect } from "react";

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
  {
    name: "Jerjes",
    number: 35,
  },
  {
    name: "Lolina",
    number: 300,
  },
  {
    name: "Toño",
    number: 546,
  },
];
//obtener el usuario y obtener las cartas
export const DarkModeContext = createContext();
export const CurrentUserContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); //true-false
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function hacerPeticion() {
      console.log("Se hace la peticion de cartas!");
    }
    hacerPeticion();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  return (
    <div className={`app ${isDarkMode && "darkMode"}`}>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header />
          <Main
            list={studentsList}
            onUpdateUser={handleUpdateUser}
            cards={cards}
          />
        </CurrentUserContext.Provider>
        <PokemonLogin />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
