import '@fortawesome/fontawesome-pro/css/all.min.css';
import '@fortawesome/fontawesome-pro/css/sharp-solid.min.css';
import 'index.css';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,200,300,400,500,600,700,800,900" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,300,400,500,600,700,800,900" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
