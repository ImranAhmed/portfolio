import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <Head>
                <title>Portfolio: Imran Ahmed</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
