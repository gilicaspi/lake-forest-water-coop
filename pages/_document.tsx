import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
