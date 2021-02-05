import React from 'react';
import { ListBoxStyle } from '../ListBox.styled';
import { PlanetStyleH3, PlanetStyleP } from './Planet.styled';

const Planet = ({ planet }) => {
  return (
    <ListBoxStyle>
      <PlanetStyleH3>{planet.name}</PlanetStyleH3>
      <PlanetStyleP>Population - {planet.population}</PlanetStyleP>
      <PlanetStyleP>Terrain - {planet.terrain}</PlanetStyleP>
    </ListBoxStyle>
  )
}

export default Planet;