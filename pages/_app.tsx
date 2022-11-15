import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="Decisive" />
        <meta
          name="description"
          content="A web app that will help you decide between things! Easy to use and no sign-up required!"
        />
        <meta name="copyright" content="Jiseeeh" />
        <meta
          name="keywords"
          content="Decisive,Decide,Decision maker,Help me decide,Choose between things,Help me choose,Decision helper, Free decision app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://decisive.jiseeeh.vercel.app/"
        />
        <meta property="og:title" content="Decisive" />
        <meta
          property="og:description"
          content="A web app that will help you decide between things! Easy to use and no sign-up required!"
        />
        <meta
          property="og:image"
          content="http://res.cloudinary.com/dpu5ywrox/image/upload/v1668523079/stvg9cjlultktkxaeq2c.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://decisive.jiseeeh.vercel.app/"
        />
        <meta property="twitter:title" content="Decisive" />
        <meta
          property="twitter:description"
          content="A web app that will help you decide between things! Easy to use and no sign-up required!"
        />
        <meta
          property="twitter:image"
          content="http://res.cloudinary.com/dpu5ywrox/image/upload/v1668523079/stvg9cjlultktkxaeq2c.png"
        />

        <title>Decisive</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-choice.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <Toaster />
    </>
  );
}

export default MyApp;
