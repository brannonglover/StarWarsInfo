import React from 'react';
import { NavBarStyle } from './NavBar.styled';

const NavBar = ({ setPage }) => {
  return (
    <NavBarStyle>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </NavBarStyle>
  )
}

export default NavBar;