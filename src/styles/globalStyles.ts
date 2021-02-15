import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root, html, body{
    height: 100%;
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #f8f8f2;
  }

  button{
    cursor: pointer;
  }
`