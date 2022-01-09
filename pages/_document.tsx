import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
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
