import React from "react";

const TargetIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="target-icon"
    >
      {/* Círculo externo */}
      <circle
        cx="18"
        cy="18"
        r="14"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />

      {/* Círculo interno */}
      <circle
        cx="18"
        cy="18"
        r="6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />

      {/* Ponto central */}
      <circle cx="18" cy="18" r="1.6" fill={color} />

      {/* Dardo cravado */}
      <path
        d="M24 10L20.5 13.5L22.5 15.5L26 12Z" /* pontinha */
        fill={color}
      />
      <line
        x1="22.5"
        y1="15.5"
        x2="18"
        y2="18"
        stroke={color}
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 8.5L27.5 10.5L26 12L24 10Z" /* rabinho do dardo */
        fill={color}
      />
    </svg>
  );
};

export default TargetIcon;
