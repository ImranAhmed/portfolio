import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return <Component {...pageProps} />;
};

export default App;
