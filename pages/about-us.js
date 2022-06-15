/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({header_top_content, story_section, founder_section}) {
	const founder_images = JSON.parse(founder_section[0].side_img);
	return (
		<>
			<div className="fancy-hero-two">
				<div className="bg-wrapper">
					<div className="container">
						<div className="page-title">About us</div>
						<div className="row">
						{header_top_content.map((headerContent,index) => {
							return(
							<div className="col-xl-8 col-lg-10 col-md-10 m-auto" key=
							{index}>
								<h1 className="heading" dangerouslySetInnerHTML={{ __html: headerContent.title }}></h1>
								<p className="sub-heading" dangerouslySetInnerHTML={{ __html: headerContent.subtitle }}></p>
							</div>
							)
						})}
						</div>
					</div>
				</div>
			</div> 
			
			<div className="fancy-text-block-nine mt-130 md-mt-80">
					<div className="shapes shape-one"></div>
					<div className="shapes shape-two"></div>
					<div className="shapes shape-three"></div>
					<div className="shapes shape-four"></div>
					<div className="container">
						<div className="title-style-two text-center mb-35 md-mb-10">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<p>Our Story</p>
									<h2 dangerouslySetInnerHTML={{ __html: story_section[0].title}}></h2>
								</div>
							</div>
						</div>

						<div className="row" dangerouslySetInnerHTML={{ __html: story_section[0].content}}>
						</div>
					</div>
			</div> 
			
			
			<div className="counter-with-icon-one border-style pt-120 pb-45 md-pt-70">
				<div className="container">
					<div className="border-style">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="counter-box-three">
									<div className="icon">
									<img src="images/icon/31.svg" alt=""/></div>
									<h2 className="number"><span className="timer" data-from="0" data-to="13" data-speed="1500" data-refresh-interval="5">0</span>m</h2>
							      	<p className="font-rubik">Ticket Sold</p>
								</div> 
							</div>
							<div className="col-lg-4 col-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<div className="counter-box-three">
									<div className="icon"><img src="images/icon/32.svg" alt=""/></div>
									<h2 className="number"><span className="timer" data-from="0" data-to="30000" data-speed="1200" data-refresh-interval="5">0</span></h2>
							      	<p className="font-rubik">Event organisers</p>
								</div> 
							</div>
							<div className="col-lg-4 col-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
								<div className="counter-box-three">
									<div className="icon"><img src="images/icon/33.svg" alt=""/></div>
									<h2 className="number"><span className="timer" data-from="0" data-to="134" data-speed="1200" data-refresh-interval="5">0</span></h2>
							      	<p className="font-rubik">Countries</p>
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div> 
			
			<div className="fancy-text-block-ten mt-120 md-mt-60">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-xl-5 col-lg-6 ml-auto order-lg-last" data-aos="fade-left" data-aos-duration="1200">
							<img src="images/icon/34.svg" alt="" className="icon" /> 
							<div dangerouslySetInnerHTML={{ __html: founder_section[0].content}}></div>
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className="row align-items-end">
								<div className="col-6" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
									<img src={founder_images[0]} alt="" className="img-meta" />
								</div>
								<div className="col-6" data-aos="fade-right" data-aos-duration="1200">
									<img src={founder_images[1]} alt="" className="img-meta" />
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-10 ml-auto">
							<div className="img-gallery mt-60 md-mt-20">
								<div className="row">
									<div className="col-sm-5 sm-mb-20" data-aos="fade-up" data-aos-duration="1200">
										<img src={founder_images[2]} alt="" className="img-meta" />
									</div>
									<div className="col-sm-7" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
										<img src={founder_images[3]} alt="" className="img-meta" />
									</div>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
			
			
			<div className="fancy-feature-five mt-200 md-mt-100">
				<div className="bg-wrapper">
					<div className="shapes shape-one"></div>
					<div className="shapes shape-two"></div>
					<div className="shapes shape-three"></div>
					<div className="shapes shape-four"></div>
					<img src="images/shape/47.svg" alt="" className="shapes shape-five" />
					<div className="container">
						<div className="title-style-two text-center mb-60 md-mb-40">
							<div className="row">
								<div className="col-xl-8 col-lg-9 m-auto">
									<p>Our Values</p>
									<h2>We’r driven by our values</h2>
									<div className="sub-text">Deski stand with friendly interface with lots of features that help our team and csutomer to collbarate easily.</div>
								</div>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-seven">
									<div className="icon d-flex align-items-end"><img src="images/icon/35.svg" alt="" /></div>
									<div className="feature-info">Customer Value</div>
									<p className="font-rubik">A place to think and track ideas for you and your team</p>
								</div> 
							</div>
							<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<div className="block-style-seven">
									<div className="icon d-flex align-items-end"><img src="images/icon/36.svg" alt="" /></div>
									<div className="feature-info">Trusted & Reliable</div>
									<p className="font-rubik">A home for your team, best practices and thoughts.</p>
								</div> 
							</div>
							<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
								<div className="block-style-seven">
									<div className="icon d-flex align-items-end"><img src="images/icon/37.svg" alt="" /></div>
									<div className="feature-info">Fast Response</div>
									<p className="font-rubik">Beautiful docs for your APIs, Products, FAQs, & User Guides,</p>
								</div> 
							</div>
						</div>
					</div>
				</div> 
			</div>
			
			<div className="team-section-two mt-200 md-mt-100">
				<div className="shapes shape-one"></div>
				<div className="shapes shape-two"></div>
				<div className="shapes shape-three"></div>
				<div className="shapes shape-four"></div>
				<div className="container">
					<div className="row align-items-center justify-content-between mb-80 md-mb-10">
						<div className="col-lg-8">
							<div className="title-style-two">
								<p>Our Team</p>
								<h2>Our talented team member waiting to server.</h2>
							</div>
						</div>
						<div className="col-lg-4 d-lg-flex justify-content-end">
						<Link href="team-V1.html" >
							<a  className="theme-btn-three md-mt-20">See All Members</a>
						</Link>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
							<div className="team-member" onClick="location.href='team-single.html';">
								<img src="images/media/img_29.png" alt="" />
								<div className="name">Jhon Du</div>
								<div className="position">Senior Product Designer</div>
							</div> 
						</div>
						<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
							<div className="team-member" onClick="location.href='team-single.html';">
								<img src="images/media/img_30.png" alt="" />
								<div className="name">Juan Barber</div>
								<div className="position">Co-Founder</div>
							</div> 
						</div>
						<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div className="team-member" onClick="location.href='team-single.html';">
								<img src="images/media/img_31.png" alt="" />
								<div className="name">Maud Ellis</div>
								<div className="position">Customer management</div>
							</div> 
						</div>
						<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
							<div className="team-member" onClick="location.href='team-single.html';">
								<img src="images/media/img_32.png" alt="" />
								<div className="name">Maud Ellis</div>
								<div className="position">Customer management</div>
							</div> 
						</div>
						<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
							<div className="team-member" onClick="location.href='team-single.html';">
								<img src="images/media/img_33.png" alt="" />
								<div className="name">Jhon Du</div>
								<div className="position">Senior Product Designer</div>
							</div> 
						</div>
						<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div className="team-member" onClick="location.href='team-single.html';">
								<img src="images/media/img_34.png" alt="" />
								<div className="name">Juan Barber</div>
								<div className="position">Co-Founder</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
			
					

		</>
	)
}

Home.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}

export async function getStaticProps() {
	const header_top_content = await fetch('http://organickuku.com/public/api/getContent/about/1').then(res => res.json());
	const story_section = await fetch('http://organickuku.com/public/api/getContent/about/2').then(res => res.json());
	const founder_section = await fetch('http://organickuku.com/public/api/getContent/about/3').then(res => res.json());
	return {
		props: {
			header_top_content,
			story_section,
			founder_section,
		}
	}
}

