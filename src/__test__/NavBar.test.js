import React from 'react';
import { cleanup, render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

afterEach(cleanup);

test('Display navbar component', () => {
  const { asFragment } = render(<NavBar />);

  expect(asFragment()).toMatchSnapshot();
});