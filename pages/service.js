/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Services({ header_content, offer, serviceSection, whyUs }) {
	const router = useRouter();
	const handleClick = (e, path) => {
			router.push(path)
	};
	return (
		<>
			<div className="fancy-hero-three">
				<div className="shapes shape-one"></div>
				<div className="shapes shape-two"></div>
				<div className="shapes shape-three"></div>
				<div className="shapes shape-four"></div>
				<div className="shapes shape-five"></div>
				<div className="shapes shape-six"></div>
				<div className="bg-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 m-auto">
								<h1 className="heading">{header_content[0].title}</h1>
								<p className="sub-heading">{header_content[0].subtitle}</p>
							</div>
						</div>
					</div>
				</div> 
			</div> 
			
			<div className="fancy-text-block-eleven mt-200 md-mt-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 order-lg-last" dangerouslySetInnerHTML={{ __html: offer[0].content}}>
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className="video-box">
								<img src={offer[0].side_img} alt="" />
							</div> 
						</div>
					</div>
				</div>

				<div className="mt-70">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="block-style-thirtyThree pr-lg-5 mt-40">
									<div className="icon"><img src="images/icon/171.svg" alt="" /></div>
									<h3 className="title"><span>Daily Updates</span></h3>
									<p>Elit esse cillum dolore eu fugiat nulla pariatur lorem elit</p>
								</div> 
							</div>
							<div className="col-lg-4">
								<div className="block-style-thirtyThree pr-lg-5 mt-40">
									<div className="icon"><img src="images/icon/172.svg" alt="" /></div>
									<h3 className="title"><span>Easu Cutomization</span></h3>
									<p>Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</p>
								</div> 
							</div>
							<div className="col-lg-4">
								<div className="block-style-thirtyThree pl-lg-5 mt-40">
									<div className="icon"><img src="images/icon/173.svg" alt="" /></div>
									<h3 className="title"><span>Fast Support</span></h3>
									<p>Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</p>
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div> 
			
			<div className="fancy-feature-six mt-140 md-mt-90">
				<div className="bg-wrapper">
					<div className="shapes shape-one"></div>
					<div className="shapes shape-two"></div>
					<div className="shapes shape-three"></div>
					<div className="shapes shape-four"></div>
					<div className="shapes shape-five"></div>
					<img src="images/shape/51.svg" alt="" className="shapes shape-six" /> 
					<div className="container">
						<div className="title-style-two text-center mb-85 md-mb-40">
							<h2>
								<span>{serviceSection.title}<img src="images/shape/line-shape-2.svg" alt="" /></span>
							</h2>
							<div className="sub-text mt-15">{serviceSection.subtitle}</div>
						</div>

						
					</div>
				</div>
			</div> 
			
			<div className="fancy-text-block-twelve mt-170 md-mt-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200" dangerouslySetInnerHTML={{ __html: whyUs[0].content}}></div>
						<div className="col-lg-5 ml-auto" data-aos="fade-left" data-aos-duration="1200">
							<div className="img-gallery">
								<img src={whyUs[0].side_img} alt="" />
								<img src="images/shape/53.svg" alt="" className="shapes shape-one" />
								<img src="images/shape/52.svg" alt="" className="shapes shape-two" />
							</div> 
						</div>
					</div>
				</div>
			</div>
			
			<div className="counter-with-icon-one pt-120 md-pt-70">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-6" data-aos="fade-up" data-aos-duration="1200">
							<div className="counter-box-three">
								<div className="icon"><img src="images/icon/23.svg" alt="" /></div>
								<h2 className="number"><span className="timer" data-from="0" data-to="13" data-speed="1500" data-refresh-interval="5">0</span>m</h2>
						      	<p className="font-rubik">Ticket Sold</p>
							</div> 
						</div>
						<div className="col-lg-4 col-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
							<div className="counter-box-three">
								<div className="icon"><img src="images/icon/24.svg" alt="" /></div>
								<h2 className="number"><span className="timer" data-from="0" data-to="30000" data-speed="1200" data-refresh-interval="5">0</span></h2>
						      	<p className="font-rubik">Event organisers</p>
							</div> 
						</div>
						<div className="col-lg-4 col-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div className="counter-box-three">
								<div className="icon"><img src="images/icon/25.svg" alt="" /></div>
								<h2 className="number"><span className="timer" data-from="0" data-to="134" data-speed="1200" data-refresh-interval="5">0</span></h2>
						      	<p className="font-rubik">Countries</p>
							</div> 
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}

Services.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}

export async function getStaticProps() {
	const header_content = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/services/1').then(res => res.json());
	const offer = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/services/2').then(res => res.json());
	const serviceSection = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/services/3').then(res => res.json());
	const whyUs = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/services/4').then(res => res.json());
	
	
	return {
		props: {
			header_content,
			offer,
			serviceSection,
			whyUs
		}
	}
}

