import * as ReactDOM from "react-dom/client";
import Header from './header'
import Footer from './footer'

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