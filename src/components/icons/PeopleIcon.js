import React from "react";

const PeopleIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="people-icon"
    >
      {/* pessoa central */}
      <circle
        cx="12"
        cy="8.5"
        r="2.25"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
      <path
        d="M7.75 16.25C8.6 14.7 10.2 13.75 12 13.75C13.8 13.75 15.4 14.7 16.25 16.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />

      {/* pessoa esquerda (traseira) */}
      <circle
        cx="6.5"
        cy="10"
        r="1.75"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
      <path
        d="M3.5 18.25C4.3 16.8 5.9 15.9 7.6 15.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />

      {/* pessoa direita (traseira) */}
      <circle
        cx="17.5"
        cy="10"
        r="1.75"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
      <path
        d="M16.4 15.9C18.1 15.9 19.7 16.8 20.5 18.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
    </svg>
  );
};

export default PeopleIcon;
