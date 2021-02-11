import React from "react";
import { NavBarStyle } from "./NavBar.styled";
import strings from "../../common/strings";
import { INavBarProps } from "../../common/types";

const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
  const { setPage } = props;
  return (
    <NavBarStyle>
      <button onClick={() => setPage("planets")}>{strings.PLANETS}</button>
      <button onClick={() => setPage("people")}>{strings.PEOPLE}</button>
    </NavBarStyle>
  );
};

export default NavBar;
