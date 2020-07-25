import * as React from 'react';
import styles from './bio.module.scss';

const Bio: React.FC = () => (
    <div className="body2">
        <div className={styles.summary}>
            I am a <span className={styles.highlight}>software engineer</span> with over{' '}
            <span className={styles.highlight}>twenty</span> years development experience acorss bulge-bracket{' '}
            <span className={styles.highlight}>investment banks</span> and{' '}
            <span className={styles.highlight}>start-ups</span>. I am comfortable working across the
            <span className={styles.highlight}>&nbsp;full stack</span> and also{' '}
            <span className={styles.highlight}>leading</span> small to medium sized{' '}
            <span className={styles.highlight}>high-performance&nbsp;</span>
            development teams. I love taking <span className={styles.highlight}>ownership</span> of the entire product
            suite and also representation to senior <span className={styles.highlight}>stakeholders</span>, and working
            directly with
            <span className={styles.highlight}>&nbsp;entrepreneurs</span>.
        </div>
        <div className={styles.summary}>If you like what you see, let&apos;s connect on LinkedIn.</div>
    </div>
);

export default Bio;
