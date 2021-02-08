import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Person from '../components/Person/Person';

afterEach(cleanup);

test('Display Person component', () => {
  const person = {
    name: "Luke Skywalker",
    gender: "male",
    birth_year: "052689"
  }
  const { asFragment } = render(<Person person={person} />);

  expect(asFragment()).toMatchSnapshot();
});