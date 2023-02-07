import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Open_Sans } from '@next/font/google';

import CssBaseline from '@mui/material/CssBaseline';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.variable} font-sans`}>
      <Head>
        <title>Book it out!</title>
        <meta
          name="description"
          content="독서 모임 일정과 상황을 한눈에 확인하세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </main>
  );
}
