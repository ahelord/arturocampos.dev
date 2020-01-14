import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../iconography.css';

const Home = () => (
  <>
    <Head>
      <title>Arturo Campos - Web Developer / Uses</title>
    </Head>
    <main className='normal'>
      <Header />
      <section>
        <h1>Uses</h1>
        <p>
          This is a summary of the software/hardware setup that I use on a daily
          basis.
        </p>
        <h2>Editor + Terminal</h2>
        <ul>
          <li>
            <a
              href='https://code.visualstudio.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Visual Studio Code
            </a>
            , I use the Stable release for Angular Development and the Insiders
            release for React/Vue development, why? because I like to have
            things separated.
          </li>
          <li>
            <a
              href='https://hyper.is/'
              target='_blank'
              rel='noopener noreferrer'>
              Hyper
            </a>{' '}
            is my terminal.
          </li>
          <li>
            My theme of choice is <strong>Shades of Purple</strong>. For both{' '}
            <a
              href='https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple'
              target='_blank'
              rel='noopener noreferrer'>
              VSCode
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/ahmadawais/Shades-of-Purple-Hyper'
              target='_blank'
              rel='noopener noreferrer'>
              Hyper
            </a>
            .
          </li>
          <li>
            I use{' '}
            <a
              href='https://github.com/microsoft/cascadia-code'
              target='_blank'
              rel='noopener noreferrer'>
              Cascadia Code
            </a>{' '}
            font (with ligatures enabled, of course).
          </li>
        </ul>
        <h2>Desktop Apps</h2>
        <ul>
          <li>
            <a
              href='https://www.google.com/chrome/'
              target='_blank'
              rel='noopener noreferrer'>
              Chrome
            </a>{' '}
            is my browser.
          </li>
          <li>
            <a
              href='https://1password.com/'
              target='_blank'
              rel='noopener noreferrer'>
              1Password
            </a>{' '}
            takes care of my passwords.
          </li>
          <li>
            I use{' '}
            <a
              href='https://www.notion.so/'
              target='_blank'
              rel='noopener noreferrer'>
              Notion
            </a>{' '}
            for my ToDos and to keep track of my important notes or projects.
          </li>
          <li>
            <a
              href='https://toggl.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Toggl
            </a>{' '}
            makes easier to track my freelance timesheets.
          </li>
          <li>
            When I need to design something I use{' '}
            <a
              href='https://www.adobe.com/products/illustrator.html'
              target='_blank'
              rel='noopener noreferrer'>
              Illustrator
            </a>{' '}
            or{' '}
            <a
              href='https://www.adobe.com/products/photoshop.html'
              target='_blank'
              rel='noopener noreferrer'>
              Photoshop
            </a>
            . Sometimes{' '}
            <a
              href='https://www.sketch.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Sketch
            </a>
            .
          </li>
          <li>
            I have several Google and G Suite accounts, so to centralize the use
            of them I use{' '}
            <a
              href='https://www.kiwiforgmail.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Kiwi for Gmail
            </a>
            .
          </li>
        </ul>
        <h2>Hardware</h2>
        <ul>
          <li>MacBook Pro 15" 2018.</li>
          <li>
            <a
              href='https://www.amazon.com/Logitech-Performance-Wireless-DISCONTINUED-Replaced/dp/B002HWRJBM'
              target='_blank'
              rel='noopener noreferrer'>
              Logitech Performance MX Mouse
            </a>
            , this thing lasts forever.
          </li>
          <li>
            <a
              href='https://www.logitech.com/en-us/product/11713'
              target='_blank'
              rel='noopener noreferrer'>
              Logitech Keyboard K480
            </a>
            .
          </li>
          <li>
            <a
              href='https://www.bose.com/en_us/products/headphones/earphones/soundsport-wireless.html#v=soundsport_wireless_black'
              target='_blank'
              rel='noopener noreferrer'>
              Bose SoundSport
            </a>{' '}
            wireless headphones.
          </li>
          <li>
            <a
              href='https://www.amazon.com/dp/B01M05SYJL'
              target='_blank'
              rel='noopener noreferrer'>
              SavvyStand
            </a>{' '}
            for my laptop.
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
