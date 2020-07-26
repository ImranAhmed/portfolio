import * as React from 'react';
import shortid from 'shortid';
import styles from './recent-work.module.scss';

type Props = {
    item: 'one' | 'two' | 'three' | 'four';
    title: string;
    experience: string[];
    logo?: string;
};

const RecentWork: React.FunctionComponent<Props> = ({ item, title, experience, logo }: Props) => {
    return (
        <div className={[styles[item], styles.mobile].join(' ')}>
            <div className={styles.divider} />
            <div className="headline3">{title}</div>
            <div className="body1">
                <ul>
                    {experience.map((e) => {
                        return (
                            <li key={shortid.generate()}>
                                <div className={['material-icons', styles.largeIcon].join(' ')}>done</div>
                                {e}
                            </li>
                        );
                    })}
                </ul>
            </div>
            {logo && <div className={logo} />}
        </div>
    );
};

export default RecentWork;
