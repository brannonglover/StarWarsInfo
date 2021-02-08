import React from 'react';
import { cleanup, render } from '@testing-library/react';
import People from '../components/People/People';

afterEach(cleanup);

test('Display People component', () => {
  const { asFragment } = render(<People />);

  expect(asFragment()).toMatchSnapshot();
});