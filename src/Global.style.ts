import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

#root {
  width: 100%;
  height: 100vh;
}

body {
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.primary.text};
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

`