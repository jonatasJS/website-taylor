import '../styles/globals.css';
import '../styles/Responsive.module.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import nProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  function test() {
    console.log('test');
  }

  return (
    <>
      <Head >
        <title>Iefutebol</title>
        <meta name="description" content="Entre em contato com o @iefutebol" />
        <link rel="icon" onClick={test} href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/nprogress.css" />
        <meta name="description" content="Entre em contato com o @iefutebol" />
        <meta name="author" content="Jônatas" />

        <meta property="og:title" content="Iefutebol Grupo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iefutebol.vercel.app/" />
        <meta property="og:description" content="Entre em contato com o @iefutebol" />
        <meta property="og:image" content="/images/Logo-Photo.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
