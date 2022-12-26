import { MainContent } from 'components/content/main-content';
import Layout from 'components/layout';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>TEST TITLE</title>
        <meta name='og:title' content='TEST TITLE' />
        {/* TODO: Gil Note: Implement meta description for SEO? */}
        <meta name='description' content='Lake forest water cooop' />
      </Head>
      <MainContent />
    </Layout>
  );
};

export default Home;
