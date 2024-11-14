import "./Main.css";
import PokemonCard from "./PokemonCard";

import { useState, useContext } from "react";
import PokemonDetail from "./PokemonDetail";
import { DarkModeContext } from "../App";
export default function Main(props) {
  const [pokemonNumberSelected, setPokemonNumberSelected] = useState(
    props.list[0].number
  );
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <main className={`main ${isDarkMode && "dark"}`}>
      <ul className="list">
        {props.list.map(function (student) {
          return (
            <PokemonCard
              name={student.name}
              pokemonNumber={student.number}
              key={student.name}
              setPokemonNumberSelected={setPokemonNumberSelected}
              pokemonNumberSelected={pokemonNumberSelected}
            />
          );
        })}
      </ul>

      <PokemonDetail pokemonId={pokemonNumberSelected} name="" />
    </main>
  );
}
