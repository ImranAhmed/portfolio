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
                <RecentWork
                    item="one"
                    title="London Stock Exchange"
                    logo="logo-lseg"
                    experience={[
                        'Web Development Lead',
                        'LCH SwapClear team (largest OTC interest rate swap clearing service by gross notional cleared)',
                        'Responsible for maintenance and development of an Electron based application',
                        'Lead development resource for a new web based product spanning multiple business areas',
                        'TypeScript, Angular, Jenkins',
                    ]}
                />
                <RecentWork item="two" title="UBS" experience={[]} />
            </div>
            <div className={styles.recentWorkSection}>
                <RecentWork item="three" title="Qbridge" experience={[]} />
                <RecentWork item="four" title="Credit Suisse" experience={[]} />
            </div>
        </>
    );
};
export default Home;
