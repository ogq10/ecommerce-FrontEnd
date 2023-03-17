import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-gray: rgb(255, 255, 255);
  --color-lighter-gray: #818181;
}
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #181A18;
    font-size: 16px;
    border-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
    height: 100%;
     
}

button, i{
  cursor: pointer;
}

h1,h2{
  color: white;
}

   
`;

export default GlobalStyle;

// url('https://images.unsplash.com/photo-1565959269841-a4fe0b077a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') no-repeat center center fixed;
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover;
//     background-repeat: no-repeat;
