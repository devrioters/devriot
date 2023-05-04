import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //* Colors
        --color-green: #0C813B;
        --color-lilac: #848ff2;
        --color-gray: #383d46;
        --color-blue-1: #1f1f2f;
        --color-blue-2: #242744;

        //* Gradients
        --gradient-dark: linear-gradient(180deg, #212131 0%, #18182A 100%);
        --gradient-green: linear-gradient(248.85deg, #06352C -1.77%, #10252D 104.39%);

        //* Tipography
        --font-header: 400 20px/24px Louis George Cafe, sans-serif;
        --font-button-1: 700 24px/30px Montserrat, sans-serif;
        --font-title: 600 56px/68px Montserrat, sans-serif;
        --font-subtitle: 500 32px/38px Cabin, sans-serif;
        --font-card-title: 600 29px/35px Montserrat, sans-serif;
        --font-card-subtitle: 700 18px/22px Cabin, sans-serif;
        --font-card-button: 400 20px/24px Montserrat, sans-serif;
        --font-username: 700 24px/auto VALORANT, sans-serif;
        --font-lat-menu: 400 22px/auto Louis George Cafe, sans-serif;
        --font-category-title: 700 60px/auto VALORANT, sans-serif;
        --font-language-title: 700 52px/auto VALORANT, sans-serif;

        //* Buttons
        --button-header-pdg: 9px 0;
        --button-header-color: var(--color-green);
        --button-banner-pdg: 16px 0;
        --button-banner-color: var(--color-green);
        --button-card-pdg: 14px 0;
        --button-card-color: var(--color-green);
        --button-leave-pdg: 6px 0;
        --button-leave-color: transparent;
        --button-leave-border: 1px solid var(--color-green);
    }

    html, body {
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        padding: 0;
    }

    div.wrapper {
        max-width: 1366px;
        margin: 0 auto;
    }
;`;
