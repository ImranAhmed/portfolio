import * as React from 'react';
import styles from './headline-title.module.scss';

type Props = {
    text: string;
};

const HeadlineTitle: React.FunctionComponent<Props> = ({ text }: Props) => (
    <div className={['headline1', styles.mobile].join(' ')}>{text}</div>
);

export default HeadlineTitle;
