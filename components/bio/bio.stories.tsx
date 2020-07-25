import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Bio from './bio';

storiesOf('Bio', module).add('with information', () => {
    return <Bio />;
});
