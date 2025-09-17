import React from "react";

const ClipboardIcon = ({ size = 24, color = "#1C274C" }) => {
  const styles = {
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    color, // habilita currentColor para o CSS usar como stroke/fill
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      className="clipboard-icon"
    >
      {/* prancheta (corpo) */}
      <rect
        x="5"
        y="6"
        width="14"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* prendedor (clip) */}
      <rect
        x="9"
        y="2"
        width="6"
        height="3.5"
        rx="1.25"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* “cabeçalho” da prancheta (faixa superior do papel) */}
      <rect
        x="7"
        y="6"
        width="10"
        height="2"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* lista (bullets + linhas) */}
      {/* linha 1 */}
      <circle cx="8.5" cy="11" r="0.9" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="11" y="10" width="7" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="transparent" />

      {/* linha 2 */}
      <circle cx="8.5" cy="14" r="0.9" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="11" y="13" width="7" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="transparent" />

      {/* linha 3 */}
      <circle cx="8.5" cy="17" r="0.9" stroke="currentColor" strokeWidth="2" fill="transparent" />
      <rect x="11" y="16" width="7" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="transparent" />
    </svg>
  );
};

export default ClipboardIcon;
