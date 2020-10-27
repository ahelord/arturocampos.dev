import Head from 'next/head';

import Footer from '../components/footer';
import Header from '../components/header';

const Error = () => (
  <>
    <Head>
      <title key='title-tag'>Arturo Campos - Web Developer</title>
    </Head>
    <main className='error'>
      <Header />
      <section>
        <h1>Oops!</h1>
        <p>An error has occurred. Page not found.</p>
      </section>
    </main>
    <Footer />
  </>
);

export default Error;
