/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Main from '../components/main'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/images/assets/ils-01.1.png'
import Head from 'next/head';
import Script from 'next/script'
import {useEffect} from 'react'
import router from "next/router"
import Link from 'next/link'

const myLoader = ({ src }) => {
	return `http://organickuku.com/${src}`
}

function withScript(Component, dir, ...srcs){
	function componentWithScriptProp(props){
		// eslint-disable-next-line react-hooks/rules-of-hooks
		srcs.forEach(src => {
			useEffect(() => {
				
				const script = document.createElement("script");
				script.src = `/${dir}/${src}.js`;
				console.log(script.src)
				script.defer = true;
				document.body.appendChild(script);
				return () => { document.body.removeChild(script) };
			});
		});
		return <Component {...props} />
	}
	componentWithScriptProp.getInitialProps = Component.getInitialProps;
	componentWithScriptProp.origGetInitialProps = Component.origGetInitialProps;
	if (process.env.NODE_ENV !== 'production') {
		const name = Component.displayName || Component.name || 'Unknown';
		componentWithScriptProp.displayName = `withScript(${name})`;
	}
	return componentWithScriptProp;
}

const Contact = () => {
	return (
		<>
		<Main>
			<div className="fancy-hero-four space-fix">
				<div className="shapes shape-one"></div>
				<div className="shapes shape-two"></div>
				<div className="shapes shape-three"></div>
				<div className="shapes shape-four"></div>
				<div className="shapes shape-five"></div>
				<div className="shapes shape-six"></div>
				<div className="bg-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-11 col-md-10 m-auto">
								<h6>Contact us</h6>
								<h2>Feel free to contact us or just say hi!</h2>
							</div>
						</div>
					</div>
				</div> 
			</div> 
			
			<div className="contact-style-two">
				<div className="container">
					<div className="contact-info-wrapper">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 d-lg-flex">
								<div className="address-info">
									<div className="icon d-flex align-items-end"><img src="images/icon/44.svg" alt="" /></div>
									<div className="title">Location</div>
									<p className="font-rubik">Dhaka, Kawran Bazar <br  /> 1201 Metro</p>
								</div> 
							</div>
							<div className="col-lg-4 col-sm-6 d-lg-flex">
								<div className="address-info">
									<div className="icon d-flex align-items-end"><img src="images/icon/45.svg" alt=""/></div>
									<div className="title">Contact</div>
									<p className="font-rubik">bawejkor@duwvude.gov <br  />(779) 564-1593</p>
								</div> 
							</div>
							<div className="col-lg-4 col-sm-6 d-lg-flex">
								<div className="address-info">
									<div className="icon d-flex align-items-end"><img src="images/icon/46.svg" alt="" /></div>
									<div className="title">Social Media</div>
									<p className="font-rubik">Find on social media</p>
									<ul className="d-flex justify-content-center">
										<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									</ul>
								</div> 
							</div>
						</div>
						<img src="images/shape/64.svg" alt="" className="shapes shape-one" />
						<img src="images/shape/65.svg" alt="" className="shapes shape-two" />
					</div> 

					<div className="form-style-classic mt-200 md-mt-80">
						<form action="#" id="contact-form" action="inc/contact.php" data-toggle="validator">
							<div className="messages"></div>
							<div className="row controls">
								<div className="col-md-6" data-aos="fade-right" data-aos-duration="1200">
									<div className="input-group-meta form-group mb-60">
										<label>First Name</label>
										<input type="text" placeholder="Michel" name="Fname" required data-error="Name is required." />
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-6" data-aos="fade-left" data-aos-duration="1200">
									<div className="input-group-meta form-group mb-60">
										<label>Last Name</label>
										<input type="text" placeholder="Hawkins" name="Lname" required data-error="Name is required." />
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-12" data-aos="fade-up" data-aos-duration="1200">
									<div className="input-group-meta form-group mb-60">
										<label>Email Address</label>
										<input type="email" placeholder="saeslal@zouj.co.uk" name="email" required data-error="Valid email is required." />
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-12" data-aos="fade-up" data-aos-duration="1200">
									<div className="input-group-meta form-group lg mb-40">
										<label>Your Message</label>
										<textarea placeholder="your message here.." name="message" required data-error="Please,leave us a message."></textarea>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-12" data-aos="fade-up" data-aos-duration="1200"><button className="theme-btn-two">Send Message</button></div>
							</div>
						</form>
					</div> 
				</div>
			</div> 
		</Main>
		</>
	)
}
Contact.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}

export default withScript(Contact, "js", "jquery.min", "popper.min", "bootstrap.min", "custom", "jquery.appear", "jquery.countTo", "slick.min", "jquery.fancybox.min", "validator", "theme", )
