import React from "react";

const DevPersonIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="devperson-icon"
    >
      {/* Cabeça */}
      <circle
        cx="18"
        cy="10"
        r="4.2"
        stroke={color}
        strokeWidth="2.6"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Corpo */}
      <path
        d="M8 24C8 19.8 12 16 18 16C24 16 28 19.8 28 24"
        stroke={color}
        strokeWidth="2.6"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Símbolo </> — ampliado e com mais presença */}
      <path
        d="M11 27L7.5 30.5L11 34"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 27L28.5 30.5L25 34"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="15"
        y1="26.5"
        x2="21"
        y2="34.5"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DevPersonIcon;
