import '@fortawesome/fontawesome-pro/css/all.min.css';
import '@fortawesome/fontawesome-pro/css/sharp-solid.min.css';
import 'index.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto+Slab:100,200,300,400,500,600,700,800,900'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,300,400,500,600,700,800,900'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
