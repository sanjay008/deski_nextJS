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
					
					<Footer />
				</div>
			</main>
		</>
	)
}