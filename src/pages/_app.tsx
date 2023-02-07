import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { Open_Sans } from '@next/font/google';

import CssBaseline from '@mui/material/CssBaseline';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.variable} font-sans`}>
      <CssBaseline />
      <Component {...pageProps} />
    </main>
  );
}
