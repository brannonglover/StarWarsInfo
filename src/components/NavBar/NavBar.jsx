import React from 'react';
import { NavBarButtonStyle, NavBarStyle } from './NavBar.styled';

const NavBar = ({ setPage }) => {
  return (
    <NavBarStyle>
      <NavBarButtonStyle onClick={() => setPage("planets")}>Planets</NavBarButtonStyle>
      <NavBarButtonStyle onClick={() => setPage("people")}>People</NavBarButtonStyle>
    </NavBarStyle>
  )
}

export default NavBar;