import { NextPage } from 'next';
import Head from 'next/head';
import { Bio, HeadlineTitle, JobTitles, RecentWork } from '../../components';
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
                <HeadlineTitle text="Imran Ahmed" />
                <div className={styles.bio}>
                    <JobTitles />
                    <Bio />
                </div>
                <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
            </div>
            <div className={styles.recentWorkSection}>
                <RecentWork item="one" title="London Stock Exchange" />
                <RecentWork item="two" title="UBS" />
            </div>
            <div className={styles.recentWorkSection}>
                <RecentWork item="three" title="Qbridge" />
                <RecentWork item="four" title="Credit Suisse" />
            </div>
        </>
    );
};
export default Home;
