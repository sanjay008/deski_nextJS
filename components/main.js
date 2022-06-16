import * as ReactDOM from "react-dom/client";
import Header from './header'
import Footer from './footer'
import Script from 'next/script'
import Image from 'next/image'

export default function Main({ children }) {
	return (
		<>
			<main>
				<div className="container-fluid">
					<Header />
					{children}
					
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
					<Footer />
				</div>
			</main>
		</>
	)
}