import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <Head>
          <title>Arturo Campos - Web Developer</title>
        </Head>
        <main>
          <Header />
          <section>
            <h1>Sorry!</h1>
            <p>
              {this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server`
                : 'An error occurred on client'}
            </p>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Error;
