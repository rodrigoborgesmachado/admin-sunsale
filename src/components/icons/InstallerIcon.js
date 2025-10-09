import React from "react";

const InstallerIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="installer-icon"
    >
      {/* Moldura externa arredondada */}
      <rect
        x="4"
        y="8"
        width="28"
        height="20"
        rx="3.5"
        ry="3.5"
        stroke={color}
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />

      {/* Seta de instalação (descendo) */}
      <path
        d="M12 17.5L18 23L24 17.5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M18 6V22.5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </svg>
  );
};

export default InstallerIcon;
