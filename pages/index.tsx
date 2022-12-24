import { MainContent } from 'components/content/main-content';
import Layout from 'components/layout';
import Head from 'next/head';
import React from 'react';

interface IProps {
  title: string;
}

const Home: React.FC<IProps> = ({ title }) => {
  return (
    <Layout>
      <Head>
        <title>TEST TITLE</title>
        <meta name='og:title' content='TEST TITLE' />
        {/* TODO: Gil Note: Implement meta description for SEO? */}
        <meta name='description' content='Lake forest water coop' />
      </Head>
      <MainContent />
    </Layout>
  );
};

export async function getStaticProps(): Promise<{ props: IProps }> {
  return {
    props: { title: 'GIL TEST' },
  };
}

export default Home;
