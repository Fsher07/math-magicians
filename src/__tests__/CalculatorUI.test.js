import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/CalculatorUI';
import renderer from 'react-test-renderer';

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