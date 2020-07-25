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
            </div>
            <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
        </>
    );
};
export default Home;
