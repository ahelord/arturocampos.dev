import { useEffect } from 'react';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

import 'css-reset-and-normalize/css/reset-and-normalize.min.css';
import 'css-reset-and-normalize/css/link-reset.min.css';
import '../styles/variables.css';
import '../styles/styles.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default App;
