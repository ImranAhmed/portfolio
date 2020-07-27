import { storiesOf } from '@storybook/react';
import * as React from 'react';
import HeadlineTitle from './headline-title';

storiesOf('HeadlineTitle', module).add('with information', () => {
    return <HeadlineTitle text="Some Text" cssClass="headline1" />;
});
