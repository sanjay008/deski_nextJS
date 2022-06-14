import * as ReactDOM from "react-dom/client";
import Navbar from './navbar'

export default function Header() {
	return (
		<>
			<div className="theme-main-menu sticky-menu theme-menu-two">
				<div className="d-flex align-items-center justify-content-center">
					<div className="logo">
						<a href="/">
							<img src="images/logo/deski_01.svg" alt="" />
						</a>
					</div>
					<Navbar />
				</div>
			</div>
		</>
	)
}