import * as React from "react";
import App from "next/app";
import Head from "next/head";

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://unpkg.com/primer/build/build.css"
            rel="stylesheet"
          />
        </Head>

        <style jsx global>{`
          html,
          body {
            min-height: 100vh;
          }

          body {
            background-color: #24292e;
            color: white;
          }
        `}</style>

        <Component {...pageProps} />
      </>
    );
  }
}
