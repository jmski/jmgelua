import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <title>JM Gelua Portfolio</title>
        <meta name="description" content="Jon-Michael Gelua Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className=" bg-gray-200 overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
