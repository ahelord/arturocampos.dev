import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/footer';
import Header from '../components/header';
import MyHead from '../components/head';

import css from '../styles/index.module.css';

const Home = () => (
  <>
    <Head>
      <title>Arturo Campos - Web Development</title>
      <MyHead />
    </Head>
    <main>
      <Header />
      <section>
        <h1>Hi!</h1>
        <p>
          I'm a Solutions Architect and Web Practice Lead at{' '}
          <a
            href='https://gorillalogic.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
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
        <p>
          Take a look at{' '}
          <a
            href='https://resume.arturocampos.dev/'
            rel='noopener noreferrer'
            target='_blank'
          >
            my resume
            <svg
              className='inline-icon'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
              <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
            </svg>
          </a>{' '}
          and the{' '}
          <Link href='uses'>
            <a>tools I use</a>
          </Link>
          .
        </p>
        <p>You can find me on:</p>
        <ul className='social'>
          <li>
            <a
              href='https://twitter.com/arturocr'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                className={css.icon}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <title>Twitter</title>
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/arturo025'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                className={css.icon}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <title>Facebook</title>
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/arturocr/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                className={css.icon}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <title>LinkedIn</title>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect x='2' y='9' width='4' height='12' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/arturocr'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                className={css.icon}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <title>GitHub</title>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://t.me/arturocr'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                className={css.icon}
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m.415 11.196 5.869 2.925c.227.112.495.104.712-.023l5.224-3.037-3.162 2.802c-.161.143-.253.347-.253.562v6.825c0 .72.919 1.023 1.35.451l2.537-3.373 6.274 3.573c.44.253 1.004-.001 1.106-.504l3.913-19.5c.117-.586-.466-1.064-1.008-.846l-22.5 8.775c-.604.236-.643 1.081-.062 1.37zm21.83-8.249-3.439 17.137-5.945-3.386c-.324-.185-.741-.103-.971.201l-1.585 2.107v-4.244l8.551-7.576c.677-.599-.101-1.664-.874-1.21l-11.39 6.622-3.992-1.989z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='&#109;&#097;&#105;&#108;&#116;&#111;:&#105;&#110;&#102;&#111;&#064;&#097;&#114;&#116;&#117;&#114;&#111;&#099;&#097;&#109;&#112;&#111;&#115;&#046;&#100;&#101;&#118;'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                className={css.icon}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              >
                <title>Email</title>
                <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
