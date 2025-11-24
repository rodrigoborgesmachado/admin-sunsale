import React from 'react';

const FlowerIcon = ({ size = 32, color = '#000000', strokeWidth = 25 }) => (
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
        <title>Sunflower</title>

        {/* Centro do girassol */}
        <circle cx="256" cy="256" r="64" />

        {/* Pétalas externas */}
        <path d="M256 128 L292 188" />
        <path d="M340 156 L308 212" />
        <path d="M384 224 L324 240" />
        <path d="M384 288 L324 272" />
        <path d="M340 356 L308 300" />
        <path d="M256 384 L292 324" />
        <path d="M172 356 L204 300" />
        <path d="M128 288 L188 272" />
        <path d="M128 224 L188 240" />
        <path d="M172 156 L204 212" />

        {/* Haste */}
        <path d="M256 320 V440" />

        {/* Folhas */}
        <path d="M224 360 C180 360 180 400 224 400" />
        <path d="M288 360 C332 360 332 400 288 400" />

    </svg>
);

export default FlowerIcon;
