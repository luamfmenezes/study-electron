import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border:0px;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }

  button{
    -webkit-app-region: no-drag;
  }
  
  html{
    height:100vh;
  }

  #root{
    background:#191622;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    border-radius:8px;
    overflow:hidden;
  }
`;
