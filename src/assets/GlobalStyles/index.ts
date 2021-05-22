import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html{
    scroll-behavior: smooth;
  }

  .container{
    width: 75%;
    margin: auto;
  }
`;