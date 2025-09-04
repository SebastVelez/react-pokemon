import "./Main.css";
import PokemonCard from "./PokemonCard";
import { useState, useContext } from "react";
import { DarkModeContext } from "../App";
import PokemonDetail from "./PokemonDetail";
export default function Main(props) {
  const [pokemonNumberSelected, setPokemonNumberSelected] = useState(0);
  const { isDarkMode } = useContext(DarkModeContext);

  function handleSubmit() {
    onUpdateUser({ name: "valor del estado", about: "valor del estado" });
  }
  return (
    <main className={`main ${isDarkMode && "dark"}`}>
      <ul className="list">
        {props.list.map(function (student) {
          return (
            <PokemonCard
              name={student.name}
              number={student.number}
              key={student.name}
              pokemonNumberSelected={pokemonNumberSelected}
              setPokemonNumberSelected={setPokemonNumberSelected}
            />
          );
        })}
      </ul>

      <PokemonDetail pokemonId={pokemonNumberSelected} />
    </main>
  );
}
