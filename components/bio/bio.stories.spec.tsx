import React from 'react';
import renderer from 'react-test-renderer';
import Bio from './bio';

it('renders correctly', () => {
    const snapshot = renderer.create(<Bio />).toJSON();
    expect(snapshot).toMatchSnapshot();
});
