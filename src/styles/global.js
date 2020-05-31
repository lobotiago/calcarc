import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    background-color: #e5e5e5;
  }

  h1 {
    font-family: 'Russo One';
  }
`