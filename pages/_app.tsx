import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="A web app that will help you decide"
        />
        <meta
          name="keywords"
          content="Help me decide, Choose between things, Decisive, Decide between things, Help me decide"
        />
        <title>Decisive</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-choice.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#e3f6f5" />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
