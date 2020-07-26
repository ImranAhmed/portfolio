import { storiesOf } from '@storybook/react';
import * as React from 'react';
import RecentWork from './recent-work';

storiesOf('RecentWork', module).add('with item as one', () => {
    return <RecentWork item="one" title="Title" />;
});

storiesOf('RecentWork', module).add('with item as two', () => {
    return <RecentWork item="two" title="Title" />;
});

storiesOf('RecentWork', module).add('with item as three', () => {
    return <RecentWork item="three" title="Title" />;
});

storiesOf('RecentWork', module).add('with item as four', () => {
    return <RecentWork item="four" title="Title" />;
});
