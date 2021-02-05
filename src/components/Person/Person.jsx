import React from 'react';
import { PersonStyle, PersonStyleH3, PersonStyleP } from './Person.styled';

const Person = ({ person }) => {
  return (
    <PersonStyle>
      <PersonStyleH3>{person.name}</PersonStyleH3>
      <PersonStyleP>Gender - {person.gender}</PersonStyleP>
      <PersonStyleP>Birth year - {person.birth_year}</PersonStyleP>
    </PersonStyle>
  )
}

export default Person;