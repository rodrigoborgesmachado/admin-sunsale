import React from "react";

const PokemonIcon = ({ size = 24, color = "#1C274C" }) => {
  const styles = {
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    color, // habilita currentColor no CSS
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      className="pokemon-icon"
    >
      {/* círculo externo (pokébola) */}
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* linhas horizontais (faixa da pokébola) */}
      <path
        d="M3 12H9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
      <path
        d="M14.5 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />

      {/* botão central */}
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
  );
};

export default PokemonIcon;
