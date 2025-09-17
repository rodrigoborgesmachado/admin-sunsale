import React from "react";

const CalculatorIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="calculator-icon"
    >
      {/* corpo */}
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* display */}
      <rect
        x="7"
        y="5"
        width="10"
        height="3"
        rx="0.8"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* keypad 3x3 */}
      <rect x="7"  y="10" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="10" y="10" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="13" y="10" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />

      <rect x="7"  y="13" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="10" y="13" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="13" y="13" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />

      <rect x="7"  y="16" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="10" y="16" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="13" y="16" width="2" height="2" rx="0.5" stroke="currentColor" strokeWidth="2" fill="transparent" />

      {/* botão de soma (um + formado por duas barras) */}
      <rect
        x="17.25"
        y="11"
        width="1.5"
        height="6"
        rx="0.75"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
      <rect
        x="16"
        y="13.25"
        width="4"
        height="1.5"
        rx="0.75"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
  );
};

export default CalculatorIcon;
