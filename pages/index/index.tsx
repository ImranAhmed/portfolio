import { NextPage } from 'next';
import Head from 'next/head';
import shortid from 'shortid';
import { Bio, HeadlineTitle, JobTitles, RecentWork } from '../../components';
import experience from '../../public/data/work-experience.json';
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
                {experience.slice(0, 2).map((e) => {
                    return (
                        <RecentWork
                            key={shortid.generate()}
                            item={e.item as 'one' | 'two' | 'three' | 'four'}
                            title={e.title}
                            logo={e.logo}
                            experience={e.experience}
                        />
                    );
                })}
            </div>
            <div className={styles.recentWorkSection}>
                {experience.slice(Math.max(experience.length - 2, 0)).map((e) => {
                    return (
                        <RecentWork
                            key={shortid.generate()}
                            item={e.item as 'one' | 'two' | 'three' | 'four'}
                            title={e.title}
                            logo={e.logo}
                            experience={e.experience}
                        />
                    );
                })}
            </div>
        </>
    );
};
export default Home;
