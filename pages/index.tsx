import { oneLine } from 'common-tags';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from 'components/layout';

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <Layout>
      <Head>
        <title>TEST TITLE</title>
        <meta name='og:title' content='TEST TITLE' />
        {/* TODO: Gil Note: Implement meta description for SEO? */}
        <meta
          name='description'
          content='Lake forest water coop'
        />
      </Head>
      <h1 className='font-serif text-3xl font-black'>GIL TEST</h1>
    </Layout>
  );
};

export async function getStaticProps(): Promise<{ props: IProps }> {
  return  {
    props:  {},
  };
}

export default Home;
