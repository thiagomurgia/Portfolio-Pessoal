import { createGlobalStyle } from "styled-components";

import BackgroundImg from "./assets/images/background.svg";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  -webkit-font-smoothing: antialiased;
    
    * html{
      
    @media (max-width: 1080px){
      font-size: 93.75%;
      background-size: 50%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
      
    }
    @media (max-width: 380px){
      font-size: 81%;
    }
}
body{
  background: rgb(39,98,91);
  background: linear-gradient(169deg, rgba(39,98,91,1) 0%, rgba(2,19,17,1) 100%) no-repeat;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;

  section{
    height: 100vh;
    width: 100vw;
    background: no-repeat;
    background-position: center;
    background-position: center;
    background-image: url(${BackgroundImg});
    background-size: 80%;
  }
  }
}
`;