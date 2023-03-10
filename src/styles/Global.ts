import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 8px;
      height: 5px;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(#e0eafc, #81ecec);
      border-radius: 50px;
    }
  }
  body {
    background-color: black;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
`
