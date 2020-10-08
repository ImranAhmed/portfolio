/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import shortid from 'shortid';
import { Bio, HeadlineTitle, JobTitles, RecentWork, RecentWorkItem } from '../../components';
import experience from '../../public/data/work-experience.json';
import styles from './home.module.scss';

type Props = {
    name: string;
};

const Home: React.FunctionComponent<Props> = ({ name }) => (
    <>
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
                        item={e.item as RecentWorkItem}
                        title={e.title}
                        logo={e.logo}
                        experience={e.experience}
                    />
                );
            })}
        </div>
        <div className={styles.recentWorkSection}>
            {experience.slice(2, 4).map((e) => {
                return (
                    <RecentWork
                        key={shortid.generate()}
                        item={e.item as RecentWorkItem}
                        title={e.title}
                        logo={e.logo}
                        experience={e.experience}
                    />
                );
            })}
        </div>
        <div className={styles.recentWorkSection}>
            {experience.slice(4, 6).map((e) => {
                return (
                    <RecentWork
                        key={shortid.generate()}
                        item={e.item as RecentWorkItem}
                        title={e.title}
                        logo={e.logo}
                        experience={e.experience}
                    />
                );
            })}
        </div>
        <div className={styles.footer}>
            Built using React, TypeScript and NextJS. View code:{' '}
            <Link href="https://github.com/ImranAhmed/portfolio" prefetch={false}>
                <a>here</a>
            </Link>{' '}
        </div>
    </>
);

export default Home;
