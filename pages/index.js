import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../iconography.css';

const Home = () => (
  <>
    <Head>
      <title>Arturo Campos - Web Developer</title>
    </Head>
    <main>
      <Header />
      <section>
        <h1>Hi!</h1>
        <p>
          I'm a Senior Web Developer and Web Practice Lead at{' '}
          <a
            href='https://gorillalogic.com/'
            rel='noopener noreferrer'
            target='_blank'>
            Gorilla Logic
          </a>
          , currently living in Costa Rica{' '}
          <span aria-label='Costa Rica' className='align-middle' role='img'>
            🇨🇷
          </span>
          .
        </p>
        <p>
          JavaScript is my passion, enjoying it a little bit more every single
          day for the last 11 years.
        </p>
        <p>Proud father of Sol and Nico, and happy husband of Marisol.</p>
        <p>
          I enjoy shredding some trails and roads with my hard-tail mountain
          bike.
        </p>
        <p>I'm available for freelance, let's get in touch.</p>
        <p>You can find me on:</p>
        <ul className='social'>
          <li>
            <a
              href='https://twitter.com/arturocr'
              rel='noopener noreferrer'
              target='_blank'>
              <i className='icon-twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/arturo025'
              rel='noopener noreferrer'
              target='_blank'>
              <i className='icon-facebook' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/arturocr/'
              rel='noopener noreferrer'
              target='_blank'>
              <i className='icon-linkedin' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/arturocr'
              rel='noopener noreferrer'
              target='_blank'>
              <i className='icon-github' />
            </a>
          </li>
          <li>
            <a
              href='https://t.me/arturocr'
              rel='noopener noreferrer'
              target='_blank'>
              <i className='icon-telegram' />
            </a>
          </li>
          <li>
            <a
              href='&#109;&#097;&#105;&#108;&#116;&#111;:&#105;&#110;&#102;&#111;&#064;&#097;&#114;&#116;&#117;&#114;&#111;&#099;&#097;&#109;&#112;&#111;&#115;&#046;&#100;&#101;&#118;'
              rel='noopener noreferrer'
              target='_blank'>
              <i className='icon-mail' />
            </a>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
