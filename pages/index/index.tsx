import { NextPage } from 'next';
import Head from 'next/head';
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
                    <div className="headline6">Web Architect / Engineer</div>
                    <div className="body2">
                        <div className={styles.summary}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </div>
                    </div>
                </div>
            </div>
            <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
        </>
    );
};
export default Home;
