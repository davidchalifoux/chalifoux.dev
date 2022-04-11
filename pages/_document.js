import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="description"
            content="David Chalifoux is a developer who loves the web."
          />
          <meta property="og:title" content="David Chalifoux" />
          <meta
            property="og:description"
            content="David Chalifoux is a developer who loves the web."
          />
          <meta property="og:url" content="https://chalifoux.dev/" />
          <meta property="og:type" content="website" />
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
