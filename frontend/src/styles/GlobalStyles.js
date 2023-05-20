import { createGlobalStyle } from "styled-components";
import 'typeface-cabin';
import 'typeface-montserrat';

export const GlobalStyles = createGlobalStyle`
    :root {
        //* Colors
        --color-green: #0C813B;
        --color-lilac: #848ff2;
        --color-gray: #383d46;
        --color-blue-1: #1A1A2C;
        --color-blue-2: #242744;
        --color-white:#FFF;

        //* Gradients
        --gradient-dark: rgba(24, 24, 42, 1);
        --gradient-green: linear-gradient(248.85deg, #06352C -1.77%, #10252D 104.39%);

        //* Tipography
        --font-header: 400 1.6rem/2.2rem Louis George Cafe, sans-serif;
        --font-button-1: 700 2.2rem/2.8rem Montserrat, sans-serif;
        --font-button-header: 700 1.6rem Montserrat, sans-serif;
        --font-title: 520 5rem/6rem Montserrat, sans-serif;
        --font-subtitle: 400 2.2rem/3rem Cabin, sans-serif;
        --font-card-title: 600 2.4rem/3.3rem Montserrat, sans-serif;
        --font-card-subtitle: 600 1.5rem/2rem Cabin, sans-serif;
        --font-card-button: 550 1.6rem/2.1rem Montserrat, sans-serif;
        --font-username: 700 2.2rem/auto VALORANT, sans-serif;
        --font-lat-menu: 400 2rem/auto Louis George Cafe, sans-serif;
        --font-category-title: 700 5.8rem/auto VALORANT, sans-serif;
        --font-language-title: 700 5.2rem/auto VALORANT, sans-serif;

        //* Buttons
        --button-header-pdg: .9rem 4.5rem;
        --button-header-color: var(--color-green);
        --button-banner-pdg: 16px 60px;
        --button-banner-color: var(--color-green);
        --button-card-pdg: 1rem 5rem;
        --button-card-color: var(--color-green);
        --button-leave-pdg: 6px 0;
        --button-leave-color: transparent;
        --button-leave-border: 1px solid var(--color-green);
    }

    html, body {
        width:100%;
        height: 100%;

        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        padding: 0;

        scroll-behavior: smooth;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    div.wrapper {
        max-width: 1240px;
        margin: 0 auto;
    }

    *{
        padding:0;
        margin:0;
        border:none;
        outline: 0;
    }
;`;
