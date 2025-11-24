import React from 'react';

const MountainIcon = ({ size = 32, color = '#000000', strokeWidth = 30
    
 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Mountain</title>

        {/* Montanha principal */}
        <path d="
            M64 384
            L208 144
            L256 224
            L304 144
            L448 384
            Z
        " />

        {/* Pico nevado mais simples e estilizado */}
        <path d="
            M208 144
            L256 224
            L304 144
        " />

    </svg>
);

export default MountainIcon;
