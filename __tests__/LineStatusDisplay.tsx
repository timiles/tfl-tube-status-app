import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Text } from 'react-native';
import LineStatusDisplay from '../src/components/LineStatusDisplay';

describe('LineStatusDisplay', () => {
  it('renders correctly', () => {
    const rendered = render(
      <LineStatusDisplay
        name="Test line"
        status="All is fine"
      />
    );

    const header = rendered.getByA11yRole('header') as Text;
    expect(header.props.children).toBe('Test line');

    const summary = rendered.getByA11yRole('summary') as Text;
    expect(summary.props.children).toBe('All is fine');
  });
});
