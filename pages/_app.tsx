import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import nProgress from 'nprogress';
import Script from 'next/script';
import Router from 'next/router';
import Link from 'next/link';
import { Html } from 'next/document'; // eslint-disable-line

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Html lang='pt-br'>
      <Head >
        <title>Taylor App</title>
        <meta name="description" content="Powered byJônatas Souza Soares" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/nprogress.css" />
      </Head>

      <Component {...pageProps} />

      <Script src="/scripts/nprogress.js"></Script>
    </Html>
  )
}

export default MyApp
