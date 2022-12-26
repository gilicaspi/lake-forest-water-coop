import { MainContent } from 'components/content/main-content';
import Layout from 'components/layout';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Lake Forest CCR Document</title>
        <meta name='og:title' content='Lake Forest CCR Document' />
        {/* TODO: Gil Note: Implement meta description for SEO? */}
        <meta name='description' content='Lake forest water co-op consumer confidence report' />
      </Head>
      <MainContent />
    </Layout>
  );
};

export default Home;
