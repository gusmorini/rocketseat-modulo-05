import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  a {
    color: #9159c1;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button, a {
    cursor: pointer;
  }

`;
