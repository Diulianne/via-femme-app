// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4A8EEF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#BD1197', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
