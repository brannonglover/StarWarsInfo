import React from 'react';
import { PersonStyle, PersonStyleH3, PersonStyleP } from './Person.styled';
import strings from '../../strings';

const Person = ({ person }) => {
  return (
    <PersonStyle>
      <PersonStyleH3>{person.name}</PersonStyleH3>
      <PersonStyleP>{strings.GENDER} - {person.gender}</PersonStyleP>
      <PersonStyleP>{strings.BIRTH_YEAR} - {person.birth_year}</PersonStyleP>
    </PersonStyle>
  )
}

export default Person;