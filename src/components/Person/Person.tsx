import React from "react";
import { PersonStyle, PersonStyleH3, PersonStyleP } from "./Person.styled";
import strings from "../../common/strings";
import { IPerson } from "../../common/types";

interface IPersonProps {
  person: IPerson;
}

const Person: React.FC<IPersonProps> = (props: IPersonProps) => {
  const { person } = props;

  return (
    <PersonStyle>
      <PersonStyleH3>{person.name}</PersonStyleH3>
      <PersonStyleP>
        {strings.GENDER} - {person.gender}
      </PersonStyleP>
      <PersonStyleP>
        {strings.BIRTH_YEAR} - {person.birth_year}
      </PersonStyleP>
    </PersonStyle>
  );
};

export default Person;
