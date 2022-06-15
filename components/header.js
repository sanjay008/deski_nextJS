import * as ReactDOM from "react-dom/client";
import Navbar from './navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<>
			<div className="theme-main-menu sticky-menu theme-menu-two">
				<div className="d-flex align-items-center justify-content-center">
					<div className="logo">
						<Link href="/">
							<a>
								<Image src="/../images/logo/deski_01.svg" alt="" width="100%" height="50%" />
							</a>
						</Link>
					</div>
					<Navbar />
				</div>
			</div>
		</>
	)
}