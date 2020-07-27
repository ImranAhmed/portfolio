/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next';
import { Home } from '../containers';

const name = 'Imran Ahmed';

const Index: NextPage = () => {
    return (
        <>
            <Home name={name} />
        </>
    );
};
export default Index;
