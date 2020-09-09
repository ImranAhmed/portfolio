/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import * as React from 'react';
import styles from './bio.module.scss';

const Bio: React.FC = () => (
    <div className="body3">
        <div className={styles.summary}>
            I am a <span className={styles.highlight}>software engineer</span> with over{' '}
            <span className={styles.highlight}>twenty</span> years experience across{' '}
            <span className={styles.highlight}>investment banking</span> and{' '}
            <span className={styles.highlight}>start-ups</span>. I have worked on unique applications that have managed{' '}
            <span className={styles.highlight}>trillions</span> of dollars of{' '}
            <span className={styles.highlight}>capital</span>. I am highly experienced on the{' '}
            <span className={styles.highlight}>front-end</span> and equally at home across the{' '}
            <span className={styles.highlight}>full stack</span> (including infrastructure). I enjoy team leading,
            contributing to <span className={styles.highlight}>high performance</span> development teams and taking{' '}
            <span className={styles.highlight}>ownership</span> of the product suite including representation to senior{' '}
            <span className={styles.highlight}>stakeholders</span> and working directly with
            <span className={styles.highlight}>&nbsp;entrepreneurs</span>.
        </div>
        <div className={styles.summary}>
            If you like what you see, let&apos;s&nbsp;
            <Link href="https://www.linkedin.com/in/ahmedimran/" prefetch={false}>
                <a target="_blank">connect</a>
            </Link>
            .
        </div>
    </div>
);

export default Bio;
