import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: black;
        width: 100vw;
        margin: auto;
        font-family: Inter, sans-serif;
        font-weight: 600;
    }

`