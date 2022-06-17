import * as ReactDOM from "react-dom/client";
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	return (
		<>
			<nav id="mega-menu-holder" className="navbar navbar-expand-lg">
				<div  className="nav-container">
					<button className="navbar-toggler">
						<span></span>
					</button>
				   <div className="navbar-collapse collapse" id="navbarSupportedContent">
						<div className="d-lg-flex justify-content-between align-items-center">
							<ul className="navbar-nav">
								<li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
									<Link href="/">
										<a className="nav-link">Home</a>
									</Link>
								</li>
								<li className={router.pathname == "/about-us" ? "nav-item active" : "nav-item"}>
									<Link href="/about-us">
										<a className="nav-link">About Us</a>
									</Link>
								</li>
								<li className={router.pathname == "/portfolio" || router.pathname == "/portfolio/[portfolioId]" ? "nav-item active" : "nav-item"}>
									<Link href="/portfolio">
										<a className="nav-link">Our Portfolio</a>
									</Link>
								</li>
								
								<li className={(router.pathname == "/service" || router.pathname == "/service/[serviceId]") ? "nav-item active" : "nav-item"}>
									<Link href="/service">
										<a className="nav-link">Our Services</a>
									</Link>
								</li>
								
								<li className={router.pathname == "/solution(managment)" ? "nav-item active" : "nav-item"}>
									<Link href="/solution(managment)">
										<a className="nav-link">Our Solutions</a>
									</Link>
								</li>
								<li className={router.pathname == "/contact_us" ? "nav-item active" : "nav-item"}>
									<Link href="/contact_us">
										<a className="nav-link">Contact Us</a>
									</Link>
								</li>
								<li className={router.pathname == "/blog" ? "nav-item active" : "nav-item"}>
									<Link href="/blog">
										<a className="nav-link">Blog</a>
									</Link>
								</li>
						   </ul>
						</div>
					</div>
				</div> 
			</nav>
		</>
	)
}