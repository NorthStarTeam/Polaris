import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Roboto';
    src: url('../../assets/fonts) format('woff2');
  }; */
  body {
    /* font-family: 'Roboto'; */
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    max-width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    margin: 0;
    padding: 0;
  }
`;
