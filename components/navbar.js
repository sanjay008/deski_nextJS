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
									<a className="nav-link" href="#" data-toggle="dropdown">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" data-toggle="dropdown">Portfolio</a>
								</li>
								<li className="nav-item mega-dropdown-md">
									<a className="nav-link" href="#" data-toggle="dropdown">Pages</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" data-toggle="dropdown">Blogs</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" data-toggle="dropdown">Docs</a>
								</li>
						   </ul>
						</div>
					</div>
				</div> 
			</nav>
		</>
	)
}