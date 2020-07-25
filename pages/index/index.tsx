import { NextPage } from 'next';
import Button from '../../components/button/button';
import styles from './index.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="headline1">Imran Ahmed</h1>
            <Button text="click" />
        </div>
    );
};
export default Home;
