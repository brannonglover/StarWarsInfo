import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Planet from '../components/Planet/Planet';

afterEach(cleanup);

test('Display Planet component', () => {
  const planet = {
    name: "Some Planet",
    population: "1000",
    terrain: "rough"
  }
  const { asFragment } = render(<Planet planet={planet} />);

  expect(asFragment()).toMatchSnapshot();
});