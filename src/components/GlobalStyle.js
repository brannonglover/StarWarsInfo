import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background: #222;
    color: #ddd;
    text-align: center;
  }
  h1 {
    color: #ffff57;
    font-size: 4em;
    letter-spacing: 2px;
  }
  button {
    margin: 0 10px;
    background: transparent;
    border: 3px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    color: #ccc;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
`;

export const MainContent = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const Content = styled.div`
  text-align: left;
`;