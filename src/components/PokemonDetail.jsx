import React, { useState, useEffect } from "react";
import "./PokemonDetail.css";

const PokemonDetail = ({ pokemonId, name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
        setLoading(false);
      }
    };

    if (pokemonId) {
      fetchPokemonDetail();
    }
  }, [pokemonId]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Cargando...</div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="error-container">
        <div className="error-text">Pokémon no encontrado</div>
      </div>
    );
  }

  return (
    <div className="pokemon-detail">
      <div className="pokemon-card">
        <div className="pokemon-content">
          {/* Imagen y información básica */}
          <div className="pokemon-basic-info">
            <div className="sprite-container">
              <img
                src={pokemon.sprites?.other.dream_world.front_default}
                alt={pokemon.name}
                className="pokemon-sprite"
              />
            </div>
            <h1 className="pokemon-name">
              {name || pokemon.name}
              <span className="pokemon-number">
                #{String(pokemonId).padStart(3, "0")}
              </span>
            </h1>
            <div className="pokemon-types">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`type-badge type-${type.type.name}`}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>

          {/* Estadísticas y detalles */}
          <div className="pokemon-stats">
            <div className="stats-section">
              <h2 className="section-title">Estadísticas base</h2>
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="stat-item">
                  <div className="stat-header">
                    <span className="stat-name">
                      {stat.stat.name === "hp"
                        ? "HP"
                        : stat.stat.name === "attack"
                        ? "Ataque"
                        : stat.stat.name === "defense"
                        ? "Defensa"
                        : stat.stat.name === "special-attack"
                        ? "Ataque Esp."
                        : stat.stat.name === "special-defense"
                        ? "Defensa Esp."
                        : "Velocidad"}
                    </span>
                    <span className="stat-value">{stat.base_stat}</span>
                  </div>
                  <div className="stat-bar-container">
                    <div
                      className={`stat-bar stat-${stat.stat.name}`}
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="characteristics-section">
          <h2 className="section-title">Características</h2>
          <div className="characteristics-grid">
            <div className="characteristic-item">
              <p className="characteristic-label">Altura</p>
              <p className="characteristic-value">{pokemon.height / 10} m</p>
            </div>
            <div className="characteristic-item">
              <p className="characteristic-label">Peso</p>
              <p className="characteristic-value">{pokemon.weight / 10} kg</p>
            </div>
            <div className="characteristic-item abilities">
              <p className="characteristic-label">Habilidades</p>
              <ul className="abilities-list">
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="moves-section">
          <h2 className="section-title">Movimientos principales</h2>
          <div className="moves-container">
            {pokemon.moves.slice(0, 4).map((move) => (
              <span key={move.move.name} className="move-badge">
                {move.move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
