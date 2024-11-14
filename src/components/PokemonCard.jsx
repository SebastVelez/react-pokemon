import "./PokemonCard.css";
import { useState } from "react";

function PokemonCard(props) {
  const [pokemonNumber, setPokemonNumber] = useState(props.pokemonNumber);

  function changePokemonNumber() {
    setPokemonNumber(pokemonNumber + 1);
  }
  function changePokemonSelected() {
    props.setPokemonNumberSelected(pokemonNumber);
  }
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
        <button onClick={changePokemonNumber}>Evolucionar</button>
        <button
          onClick={() => {
            changePokemonSelected();
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
