import React from "react";

const JsonIcon = ({ size = 24, color = "#1C274C" }) => {
  const styles = {
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      className="json-icon"
    >
      {/* Chave esquerda { */}
      <path
        d="M11 6C8 6 7 8 7 10V14C7 15.2 6 16 5 16H4M5 20C6 20 7 20.8 7 22V26C7 28 8 30 11 30"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />

      {/* Letra “i” central */}
      <line
        x1="18"
        y1="13"
        x2="18"
        y2="25"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="18" cy="9" r="1.5" fill={color} />

      {/* Chave direita } */}
      <path
        d="M25 6C28 6 29 8 29 10V14C29 15.2 30 16 31 16H32M31 20C30 20 29 20.8 29 22V26C29 28 28 30 25 30"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </svg>
  );
};

export default JsonIcon;
