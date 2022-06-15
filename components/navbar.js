import * as ReactDOM from "react-dom/client";
import Link from 'next/link'

export default function Navbar() {
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
								<li className="nav-item position-static active">
									<Link href="/">
										<a className="nav-link">Home</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/about-us">
										<a className="nav-link">About Us</a>
									</Link>
								</li>
								<li className="nav-item mega-dropdown-md">
									<Link href="/portfolio">
										<a className="nav-link">Our Portfolio</a>
									</Link>
								</li>
								
								<li className="nav-item">
									<Link href="/service">
										<a className="nav-link">Our Services</a>
									</Link>
								</li>
								
								<li className="nav-item">
									<Link href="/solution(managment)">
										<a className="nav-link">Our Solutions</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/contact_us">
										<a className="nav-link">Contact Us</a>
									</Link>
								</li>
								<li className="nav-item">
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