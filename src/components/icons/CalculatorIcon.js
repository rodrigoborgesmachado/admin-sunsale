import React from "react";

const MathIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="math-icon"
    >
      {/* Sinal de + */}
      <line
        x1="9"
        y1="11"
        x2="9"
        y2="19"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="15"
        x2="13"
        y2="15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Sinal de − */}
      <line
        x1="23"
        y1="15"
        x2="31"
        y2="15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Sinal de × */}
      <line
        x1="7"
        y1="26"
        x2="13"
        y2="32"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="26"
        x2="7"
        y2="32"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Sinal de ÷ */}
      <line
        x1="23"
        y1="29"
        x2="31"
        y2="29"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="27" cy="25" r="1.7" fill={color} />
      <circle cx="27" cy="33" r="1.7" fill={color} />
    </svg>
  );
};

export default MathIcon;
