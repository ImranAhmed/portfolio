import { NextPage } from 'next';
import Head from 'next/head';
import TextLoop from 'react-text-loop';
import styles from './index.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio : Imran Ahmed</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div className="hero-bridge" />

            <div className={styles.card}>
                <div className={styles.divider} />
                <div className="headline1">Imran Ahmed</div>
                <div className={styles.bio}>
                    <div className="headline5">
                        <TextLoop>
                            <span>Web Architect</span>
                            <span>Software Engineer</span>
                            <span>UI Developer</span>
                            <span>UX Designer</span>
                            <span>Cloud Architect</span>
                            <span>Computer Scientist</span>
                        </TextLoop>
                    </div>
                    <div className="body2">
                        <div className={styles.summary}>Welcome to my space.</div>
                        <div className={styles.underline} />
                        <div className={styles.summary}>
                            I am a <span className={styles.highlight}>software engineer</span> with over{' '}
                            <span className={styles.highlight}>twenty</span> years development experience acorss
                            bulge-bracket <span className={styles.highlight}>investment banks</span> and{' '}
                            <span className={styles.highlight}>start-ups</span>. I am comfortable working across the
                            <span className={styles.highlight}>&nbsp;full stack</span> and also{' '}
                            <span className={styles.highlight}>leading</span> small to medium sized{' '}
                            <span className={styles.highlight}>high-performance&nbsp;</span>
                            development teams. I love taking <span className={styles.highlight}>ownership</span> of an
                            the entire product suite and also representation to senior{' '}
                            <span className={styles.highlight}>stakeholders</span>, and working directly with
                            <span className={styles.highlight}>&nbsp;entrepeneurs</span>.
                        </div>
                        <div className={styles.summary}>If you like what you see, let&apos;s connect on LinkedIn.</div>
                    </div>
                </div>
            </div>
            <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
        </>
    );
};
export default Home;
