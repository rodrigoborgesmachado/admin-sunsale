import React from 'react';

const EvaluationIcon = ({ size = 32, color = '#000000', strokeWidth = 25 }) => (
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
        <title>Evaluation</title>

        {/* Documento / ficha de avaliação */}
        <path d="
            M176 72
            h160
            a40 40 0 0 1 40 40
            v288
            a40 40 0 0 1 -40 40
            h-160
            a40 40 0 0 1 -40 -40
            v-288
            a40 40 0 0 1 40 -40
            z
        " />

        {/* Cabeçalho da ficha */}
        <path d="M200 128 H312" />

        {/* Linha de texto */}
        <path d="M200 168 H296" />

        {/* Estrela de avaliação */}
        <path d="
            M256 212
            l18 30
            l34 8
            l-24 24
            l6 34
            l-34 -16
            l-34 16
            l6 -34
            l-24 -24
            l34 -8
            z
        " />

        {/* Check de conclusão/avaliado */}
        <path d="
            M208 336
            l32 32
            l64 -64
        " />

    </svg>
);

export default EvaluationIcon;
