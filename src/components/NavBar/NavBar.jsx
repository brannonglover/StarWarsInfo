import React from 'react';
import { NavBarStyle } from './NavBar.styled';
import strings from '../../strings';

const NavBar = ({ setPage }) => {
  return (
    <NavBarStyle>
      <button onClick={() => setPage("planets")}>{strings.PLANETS}</button>
      <button onClick={() => setPage("people")}>{strings.PEOPLE}</button>
    </NavBarStyle>
  )
}

export default NavBar;