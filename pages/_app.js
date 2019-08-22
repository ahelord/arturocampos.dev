import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

import 'typeface-gothic-a1';

import 'css-reset-and-normalize/css/reset-and-normalize.min.css';
import 'css-reset-and-normalize/css/link-reset.min.css';
import '../variables.css';
import '../styles.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA('UA-146225111-1', Router)(MyApp);
