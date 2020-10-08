import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: monospace, sans-serif;
    transition: all 0.50s linear;
  }
  ul {
    background-color: ${({ theme }) => theme.body};
  }
  a.link {
    color: ${({ theme }) => theme.text};
  }
`
