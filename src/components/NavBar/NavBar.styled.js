import styled from "styled-components";

export const NavBarStyle = styled.nav`
  display: grid;
  grid-template-columns: 15% 15%;
  justify-content: center;
`;

export const NavBarButtonStyle = styled.button`
  margin: 0 10px;
  background: transparent;
  border: 3px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  color: #ccc;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;