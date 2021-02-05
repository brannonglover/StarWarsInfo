import React from 'react';
import { PlanetStyle, PlanetStyleH3, PlanetStyleP } from './Planet.styled';

const Planet = ({ planet }) => {
  return (
    <PlanetStyle>
      <PlanetStyleH3>{planet.name}</PlanetStyleH3>
      <PlanetStyleP>Population - {planet.population}</PlanetStyleP>
      <PlanetStyleP>Terrain - {planet.terrain}</PlanetStyleP>
    </PlanetStyle>
  )
}

export default Planet;