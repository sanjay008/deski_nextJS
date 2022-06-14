import Document, { Html, Head, Main, NextScript } from "next/document";
import { hydrate, render } from "react-dom"




class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
		 
		  
        </Head>
        <body>
			<div>
				<Main />
			</div>
         
        </body>
      </Html>
    );
  }
}

export default MyDocument;
