import { storiesOf } from '@storybook/react';
import * as React from 'react';
import RecentWork from './recent-work';

const props = {
    title: 'London Stock Exchange',
    logo: 'logo-lseg',
    experience: [
        'Web Development Lead',
        'LCH SwapClear team (largest OTC interest rate swap clearing service by gross notional cleared)',
        'Responsible for maintenance and development of an Electron based application',
        'Lead development resource for a new web based product spanning multiple business areas',
        'TypeScript, Angular, Jenkins',
    ],
};

storiesOf('RecentWork', module).add('with item as one', () => {
    return <RecentWork item="one" title={props.title} logo={props.logo} experience={props.experience} />;
});

storiesOf('RecentWork', module).add('with item as two', () => {
    return <RecentWork item="two" title={props.title} logo={props.logo} experience={props.experience} />;
});

storiesOf('RecentWork', module).add('with item as three', () => {
    return <RecentWork item="three" title={props.title} logo={props.logo} experience={props.experience} />;
});

storiesOf('RecentWork', module).add('with item as four', () => {
    return <RecentWork item="four" title={props.title} logo={props.logo} experience={props.experience} />;
});
