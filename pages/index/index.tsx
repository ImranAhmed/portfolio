import { NextPage } from 'next';
import Head from 'next/head';
import Bio from '../../components/bio/bio';
import JobTitles from '../../components/job-titles/job-titles';
import styles from './index.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio: Imran Ahmed</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div className="hero-bridge" />

            <div className={styles.card}>
                <div className={styles.divider} />
                <div className="headline1">Imran Ahmed</div>
                <div className={styles.bio}>
                    <JobTitles />
                    <Bio />
                </div>
                <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
            </div>
            <div className={styles.recentItemsSection}>
                <div className={styles.recentItemsContainerOne}>
                    <div className={styles.divider} />
                    <div className="headline3">London Stock Exchange</div>
                </div>
                <div className={styles.recentItemsContainerTwo}>
                    <div className={styles.divider} />
                    <div className="headline3">UBS</div>
                </div>
            </div>
            <div className={styles.recentItemsSection}>
                <div className={styles.recentItemsContainerThree}>
                    <div className={styles.divider} />
                    <div className="headline3">Qbridge</div>
                </div>
                <div className={styles.recentItemsContainerFour}>
                    <div className={styles.divider} />
                    <div className="headline3">Credit Suisse</div>
                </div>
            </div>
        </>
    );
};
export default Home;
