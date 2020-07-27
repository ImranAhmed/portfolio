/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import shortid from 'shortid';
import { Bio, HeadlineTitle, JobTitles, RecentWork } from '../../components';
import experience from '../../public/data/work-experience.json';
import styles from './index.module.scss';

const name = 'Imran Ahmed';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio: Imran Ahmed</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="hero-bridge" />

            <div className={[styles.card, 'mobile-hide'].join(' ')}>
                <div className={styles.divider} />
                <HeadlineTitle text={name} cssClass="headline1" />
                <div className={styles.bio}>
                    <JobTitles />
                    <Bio />
                </div>
                <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
            </div>
            <div className={[styles.cardMobile, 'tablet-desktop-hide'].join(' ')}>
                <div className={styles.divider} />
                <HeadlineTitle text={name} cssClass="headline4" />
                <div className={styles.bioMobile}>
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
            <div className={styles.footer}>
                Build with &#10084; in London, UK using React and NextJS. View code:{' '}
                <Link href="https://github.com/ImranAhmed/portfolio" prefetch={false}>
                    <a>here</a>
                </Link>{' '}
            </div>
        </>
    );
};
export default Home;
