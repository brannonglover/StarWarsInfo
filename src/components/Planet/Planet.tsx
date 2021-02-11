import React from "react";
import { ListBoxStyle } from "../ListBox.styled";
import { PlanetStyleH3, PlanetStyleP } from "./Planet.styled";
import strings from "../../common/strings";
import { IPlanet } from "../../common/types";

interface IPlanetProps {
  planet: IPlanet;
}

const Planet: React.FC<IPlanetProps> = (props: IPlanetProps) => {
  const { planet } = props;

  return (
    <ListBoxStyle>
      <PlanetStyleH3>{planet.name}</PlanetStyleH3>
      <PlanetStyleP>
        {strings.POPULATION} - {planet.population}
      </PlanetStyleP>
      <PlanetStyleP>
        {strings.TERRAIN} - {planet.terrain}
      </PlanetStyleP>
    </ListBoxStyle>
  );
};

export default Planet;
