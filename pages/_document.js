import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#fa425f' />
          <meta
            name='apple-mobile-web-app-title'
            content='Arturo Campos - Web Development'
          />
          <meta
            name='application-name'
            content='Arturo Campos - Web Development'
          />
          <meta name='msapplication-TileColor' content='#fa425f' />
          <meta name='theme-color' content='#ffffff' />
          <meta
            property='title'
            content='Arturo Campos - Web Development'
            key='meta-title'
          />
          <meta property='description' content='Web Development' />
          <meta property='og:title' content='Arturo Campos - Web Development' />
          <meta property='og:description' content='Web Development' />
          <meta property='og:image' content='/images/share.png' />
          <meta property='og:url' content='https://arturocampos.dev' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            property='og:site_name'
            content='Arturo Campos - Web Development'
          />
          <meta
            name='twitter:image:alt'
            content='Arturo Campos - Web Development'
          />
          <meta name='twitter:site' content='@arturocr' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
