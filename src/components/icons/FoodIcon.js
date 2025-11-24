import React from 'react';

const FoodIcon = ({ size = 32, color = '#000000', strokeWidth = 25 }) => (
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
        <title>Lettuce</title>

        {/* Contorno da folha de alface */}
        <path d="
            M256 40
            c-28 10 -46 30 -54 56
            c-22 -6 -44 0 -60 16
            c-20 20 -24 52 -10 78
            c-24 10 -40 34 -40 60
            c0 40 32 72 72 72
            c0 28 20 56 48 64
            c28 8 58 -4 74 -28
            c16 24 46 36 74 28
            c28 -8 48 -36 48 -64
            c40 0 72 -32 72 -72
            c0 -26 -16 -50 -40 -60
            c14 -26 10 -58 -10 -78
            c-16 -16 -38 -22 -60 -16
            c-8 -26 -26 -46 -54 -56
            z
        " />

        {/* Veios internos da alface */}
        <path d="M256 120 L256 360" />
        <path d="M200 160 C220 200 220 280 200 320" />
        <path d="M312 160 C292 200 292 280 312 320" />

    </svg>
);

export default FoodIcon;
