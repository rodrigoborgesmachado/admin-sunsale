import React from 'react';

const BiomeImageIcon = ({ size = 35, color = '#000000', strokeWidth = 30 }) => (
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
        <title>Biome Image</title>

        {/* Sol */}
        <circle cx="360" cy="160" r="40" />

        {/* Montanha */}
        <path d="M80 360 L200 200 L320 360 Z" />

        {/* Cacto simples à direita */}
        <path d="
            M380 360
            V280
            C380 250 360 250 360 280
            V320
        " />
        <path d="
            M380 300
            C400 300 400 260 380 260
        " />

        {/* Base */}
        <path d="M64 360 H448" />
    </svg>
);

export default BiomeImageIcon;
