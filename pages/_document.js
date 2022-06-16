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
          <NextScript />
			<Script src="../vendor/jquery.min.js" strategy="beforeInteractive" />
			<Script src="../vendor/popper.js/popper.min.js" strategy="beforeInteractive" />
			<Script src="../vendor/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
			<Script src="../vendor/mega-menu/assets/js/custom.js" strategy="beforeInteractive" />
			<Script src="../vendor/aos-next/dist/aos.js" strategy="beforeInteractive" />
			<Script src="../vendor/jquery.appear.js" strategy="afterInteractive" />
			<Script src="../vendor/jquery.countTo.js" strategy="afterInteractive" />
			<Script src="../vendor/slick/slick.min.js" strategy="afterInteractive" />
			<Script src="../vendor/fancybox/dist/jquery.fancybox.min.js" strategy="afterInteractive" />
			<Script src="../js/theme.js" strategy="afterInteractive" />
			<Script src="../assets/js/custom.js" strategy="afterInteractive" />
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
