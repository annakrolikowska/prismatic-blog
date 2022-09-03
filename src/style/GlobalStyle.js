import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
      margin: 0 auto;
      padding: 0;
      width: 1000px;
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    a {
      text-decoration: none;
      color: black;
      }

      h2 {
        font-size: 1.7rem;
      }

      @media (max-width: 1025px) {
        body {
          width: 700px;
        } 
      }

      @media (max-width: 749px) {
        body {
          /* width: 350px; */
        } 
    } 



`;
 
export default GlobalStyle;