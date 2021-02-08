import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Planets from '../components/Planets/Planets';

afterEach(cleanup);

test('Display Planet component', () => {
  const { asFragment } = render(<Planets />);

  expect(asFragment()).toMatchSnapshot();
});