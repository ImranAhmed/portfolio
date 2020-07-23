import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './button';

storiesOf('Button', module).add('with text', () => {
    return <Button text="Click Me" />;
});
