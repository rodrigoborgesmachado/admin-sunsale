import React from 'react';

const QuestionIcon = ({ size = 32, color = '#000000', strokeWidth = 30
    
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
        <title>Question</title>

        {/* Círculo externo */}
        <path d="
            M256 48
            c114 0 208 94 208 208
            s-94 208 -208 208
            s-208 -94 -208 -208
            s94 -208 208 -208
            z
        " />

        {/* Curva da interrogação */}
        <path d="
            M200 200
            c0 -40 32 -72 72 -72
            s72 32 72 72
            c0 48 -48 56 -48 96
        " />

        {/* Ponto da interrogação */}
        <circle cx="256" cy="360" r="8" />
    </svg>
);

export default QuestionIcon;
