import Document, { Html, Head, Main, NextScript } from "next/document";
import { hydrate, render } from "react-dom"
import CustomStyle from '../components/style'
import CustomScript from '../components/script'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
		  <CustomStyle />
		  
        </Head>
        <body>
			<div className="main-page-wrapper">
				<Main />
			</div>
          <CustomScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
