import '@fortawesome/fontawesome-pro/css/all.min.css';
import '@fortawesome/fontawesome-pro/css/sharp-solid.min.css';
import 'index.css';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
