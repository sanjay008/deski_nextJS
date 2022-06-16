/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Main from '../../components/main'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const myLoader = ({ src }) => {
	return `http://organickuku.com/${src}`
}

export default function singleService({services, service, serviceId}) {
	return (
		<>
		
		<div className="service-details-one pt-150 md-pt-100">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-8 order-lg-last" dangerouslySetInnerHTML={{ __html: service[0].content}}>
							
								
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 order-lg-first">
							<div className="sidebar md-mt-100">
								<div className="category-list">
									<h4 className="font-gordita">Services</h4>
									<ul>
									{services.map((row, index) => {
										return(
											<li key={"service_"+index}>
												<Link href={'/service/'+row.id}>
													<a className={row.id == serviceId ? "active" : ""}>{row.title}</a>
												</Link>
											</li>
										)
									})}
									</ul>
								</div> 
								<div className="sidenote">
									<p>Evernote Web offers a complete lineup major linup browser</p>
									<span>- Rashed ka.</span>
								</div>
								<div className="share-option">
									<h4 className="font-gordita">Share it. </h4>
									<ul className="d-flex social-icon">
										<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
			
			<div className="footer-bg-wrapper">
				<div className="fancy-short-banner-two">
					<div className="container">
						<div className="content-wrapper">
							<div className="bg-wrapper d-lg-flex align-items-center justify-content-between">
								<h2 className="font-gilroy-bold">Don’t find the answer? contact us for any query.</h2>
								<a href="contact-us(light).html">Contact us</a>
								<div className="bubble-one"></div>
								<div className="bubble-two"></div>
								<div className="bubble-three"></div>
								<div className="bubble-four"></div>
								<div className="bubble-five"></div>
							</div> 
						</div> 
					</div>
				</div> 
			</div> 
		</>
	)
}

singleService.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}

export async function getServerSideProps({ params }) {
	const serviceId = params.serviceId.replace(/\-/g, '+')
	const service = await fetch(`http://organickuku.com/public/api/getSingleService/${serviceId}`).then(res => res.json());
	const services = await fetch('http://organickuku.com/public/api/getAllServices').then(res => res.json());
	
	return {
		props: {
			service,
			services,
			serviceId
		}
	}
}

