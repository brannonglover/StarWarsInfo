import React from 'react';
import Pagination from '../components/Pagination';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

test('Display buttons for pagination', () => {
  const { asFragment } = render(<Pagination page={1} setPage={() => jest.fn()} />);

  expect(asFragment()).toMatchSnapshot();
});