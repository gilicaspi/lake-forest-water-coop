import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* TODO: Gil Note: Remove noindex when we're ready to be crawled */}
        <meta name='robots' content='noindex' />
        <title></title>
      </Head>
      <main className='flex w-full flex-col'>
        {/* TODO: Gil Note: Put in a header */}
        {children}
        {/* TODO: Gil Note: Put in a footer */}
      </main>
    </div>
  );
}

export default Layout;
