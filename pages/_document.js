import Document, { Html, Head, Main, NextScript } from "next/document";
import { hydrate, render } from "react-dom"
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>		  
          <NextScript />
			
        </Head>
        <body>
			<div className="main-page-wrapper">
				<Main />
			</div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
