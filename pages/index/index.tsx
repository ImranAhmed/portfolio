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
                        <div className={styles.summary}>
                            Welcome to my space. I am a software engineer with over twenty years development experience
                            acorss bulge-bracket investment banks and start-ups. I am comfortable across the full stack
                            and also leading small to medium sized development teams. I enjoy product ownership and
                            representation to senior stakeholders and also working directly with entrepeneurs. If you
                            like what you see please feel free to connect with me on LinkedIn.
                        </div>
                    </div>
                </div>
            </div>
            <div className={['material-icons', styles.largeIcon].join(' ')}>keyboard_arrow_down</div>
        </>
    );
};
export default Home;
