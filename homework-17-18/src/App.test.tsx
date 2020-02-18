import React from 'react';
import { render } from '@testing-library/react';
import Project from './ts/project/Project';

test('renders learn react link', () => {
  const { getByText } = render(<Project />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
