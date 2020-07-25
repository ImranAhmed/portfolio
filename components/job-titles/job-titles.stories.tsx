import { storiesOf } from '@storybook/react';
import * as React from 'react';
import JobTitles from './job-titles';

storiesOf('JobTitles', module).add('with information', () => {
    return <JobTitles />;
});
