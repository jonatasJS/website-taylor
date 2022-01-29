import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang='pt-br'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="/scripts/nprogress.js" />
        </body>
      </Html>
    )
  }
}

export default Document