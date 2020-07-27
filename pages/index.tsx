/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next';
import Head from 'next/head';
import { Home } from '../containers';

const name = 'Imran Ahmed';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio: {name}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Home name={name} />
        </>
    );
};
export default Index;
