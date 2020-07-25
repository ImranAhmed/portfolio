import { NextPage } from 'next';
import Head from 'next/head';
import TextLoop from 'react-text-loop';
import Bio from '../../components/bio/bio';
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
                    <Bio />
                </div>
            </div>
            <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
        </>
    );
};
export default Home;
