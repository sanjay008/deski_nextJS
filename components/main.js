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
					
					<Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
					<Script src="../vendor/jquery.min.js" />
					<Script src="../vendor/popper.js/popper.min.js" />
					<Script src="../vendor/bootstrap/js/bootstrap.min.js" />
					<Script src="../vendor/mega-menu/assets/js/custom.js" />
					<Script src="../vendor/aos-next/dist/aos.js" />
					<Script src="../vendor/jquery.appear.js" />
					<Script src="../vendor/jquery.countTo.js" />
					<Script src="../vendor/slick/slick.min.js" />
					<Script src="../js/theme.js" />
					<Script src="../assets/js/dataTables.min.js" />
					<Script src="../assets/js/custom.js" />
					<Footer />
				</div>
			</main>
		</>
	)
}