import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/CalculatorUI';

describe('Calculator', () => {
  test('should render calculator', () => {
    render(<Calculator />);
    expect(screen.getByText('AC').value).toBe('AC');
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
