import * as React from 'react';
import styles from './recent-work.module.scss';

type Props = {
    item: 'one' | 'two' | 'three' | 'four';
    title: string;
};

const RecentWork: React.FunctionComponent<Props> = ({ item, title }: Props) => {
    return (
        <div className={styles[item]}>
            <div className={styles.divider} />
            <div className="headline3">{title}</div>
        </div>
    );
};

export default RecentWork;
