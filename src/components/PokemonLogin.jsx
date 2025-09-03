import React, { useState, useContext } from "react";
import "./PokemonLogin.css";

import { DarkModeContext } from "../App";
const PokemonLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`login-container ${isDarkMode && "dark"}`}>
      <div className="login-card">
        <div className="login-header">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            className="login-logo"
          />
          <h1 className="login-title">Pokémon Trainer Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nombre de Entrenador</label>
            <input
              type="text"
              id="username"
              placeholder="Ash Ketchum"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className={`login-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="pokeball-spinner"></div>
            ) : (
              "Iniciar Aventura"
            )}
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="footer-link">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="#" className="footer-link">
            Registrarse como entrenador
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonLogin;
