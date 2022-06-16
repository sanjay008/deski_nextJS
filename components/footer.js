/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Footer() {
	return (
		<>
			<div className="fancy-short-banner-three mt-100 md-mt-40">
				<div className="container">
					<div className="bg-wrapper">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="title-style-one">
									<h6 className="font-rubik" style={{ color: '#F96F60' }}>Start your free trial.</h6>
									<h2>New here? Start your free trial now.</h2>
								</div> 
							</div>
							<div className="col-lg-6">
								<div className="form-wrapper">
									<form action="#">
										<input type="text" placeholder="Email address" />
										<button>Start trial</button>
									</form>
									<p className="font-rubik">Already a member? <a href="login.html">Sign in.</a></p>
								</div> 
							</div>
						</div>
					</div> 
				</div> 
			</div> 

			<footer className="theme-footer-two pt-150 md-pt-80">
				<div className="top-footer">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-lg-2 col-12 footer-about-widget" data-aos="fade-up" data-aos-duration="1200">
								<a href="index-customer-support.html" className="logo"><img src="images/logo/deski_03.svg" alt="" /></a>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
								<h5 className="footer-title">Products</h5>
								<ul>
									<li>
										<Link href="#">
											<a>Take the tour</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Live chat</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Self-service</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Social</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Mobile</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Collaboration</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>deski Reviews</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-6 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<h5 className="footer-title">Services</h5>
								<ul>
									<li>
										<Link href="#">
											<a>Web Design</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Development</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Wordpress</a>
										</Link>
									</li>										
									<li>
										<Link href="#">
											<a>Online Marketing</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Content</a>
										</Link>
									</li>
								</ul>
							</div> 
							<div className="col-lg-2 col-md-3 col-sm-6 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
								<h5 className="footer-title">About us</h5>
								<ul>
									<li>
										<Link href="#">
											<a>About us</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Work Portfolio</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Team</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Plan & Pricing</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>News</a>
										</Link>
									</li>
								</ul>
							</div> 
							<div className="col-lg-3 col-md-3 col-sm-6 address-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
								<h5 className="footer-title">Address</h5>
								<ul className="info">
									<li>
										<Link href="#">
											<a>companyinfo@mail.com</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a className="mobile-num">+761 412 3224</a>
										</Link>
									</li>
								</ul>
								<ul className="social-icon d-flex">
									<li>
										<Link href="#">
											<a><i className="fa fa-facebook"></i></a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a><i className="fa fa-twitter"></i></a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a><i className="fa fa-linkedin"></i></a>
										</Link>
									</li>
								</ul>
							</div> 
						</div> 
					</div> 
				</div> 
				
				<div className="container">
					<div className="bottom-footer-content">
						<div className="d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor=".theme-footer-two">
							<p>Copyright @2022 deski inc.</p>
						</div>
					</div> 
				</div>
			</footer> 
			
			<button className="scroll-top">
				<i className="fa fa-angle-up" aria-hidden="true"></i>
			</button>
		</>
	)
}