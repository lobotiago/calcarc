import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* FONTS */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  
  /* General Style */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, #root {
    background-color: #e5e5e5;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    position: relative;
    top: 0;
  }

  h1 {
    font-family: 'Russo One';
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  header {
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px 0;
      color: #fff;
      background-color: #700098;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      h1 {
        margin: 0;
        color: #fff;
        font-size: 36px;
      }
    }
  }
`