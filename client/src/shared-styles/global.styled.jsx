import {  createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif;
    line-height: 1.7;
    height: 100vh;
    background-color: ${({theme}) => theme.bgMain  }
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    border: none;
}

`