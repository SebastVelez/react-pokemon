import { useState } from "react";
import "./PokemonCard.css";

function PokemonCard(props) {
  const [pokemonNumber, setPokemonNumber] = useState(props.number);
  const isSelected = props.pokemonNumberSelected === pokemonNumber;
  const buttonText = isSelected ? "Seleccionado" : "Seleccionar";
  return (
    <div className={`card ${isSelected && "card_selected"}`}>
      <img
        className="card__image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
      />
      <h2 className="card__title">{props.name}</h2>
      <div className="card__buttons">
        <button onClick={() => setPokemonNumber(pokemonNumber + 1)}>
          Evolucionar
        </button>
        <button onClick={() => props.setPokemonNumberSelected(pokemonNumber)}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
