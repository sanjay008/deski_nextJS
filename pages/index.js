import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Main from '../components/main'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home({header_top_content, whatWeDo, founderNotes, features}) {
	return (
		<>
			<div className="hero-banner-two">
			{header_top_content.map(headerTop => {
				return (
				<div className="container">
					<div className="row align-items-start justify-content-between">
						<div className="col-lg-6 order-lg-last">
							<div className="illustration-holder">
								<Image src={ headerTop.side_img } alt="" className="illustration_01" width="200px" height="100px" />
								<Image src="/../images/assets/ils-01.1.png" alt="" layout="fill" className="shapes shape-one" />
								<Image src="/../images/assets/ils-01.2.png" alt="" layout="fill" className="shapes shape-two" />
								<Image src="/../images/assets/ils-01.3.png" alt="" layout="fill" className="shapes shape-three" />
							</div>
						</div>
						<div className="col-xl-5 col-lg-6 order-lg-first"  dangerouslySetInnerHTML={{ __html: headerTop.content }}>
							
						</div>
					</div> 
				</div>
				)
			})}

				<div className="mt-65 md-mt-50 trusted-companies">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-12">
								<p>Over <span>13,000+ Client</span> all over the world.</p>
							</div>
							<div className="col-12">
								<div className="companies-logo-slider">
									<div className="item"><img src="images/logo/logo-1.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-2.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-3.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-4.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-5.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-6.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-7.png" alt="" /></div>
									<div className="item"><img src="images/logo/logo-3.png" alt="" /></div>
								</div>
							</div>
						</div>
					</div>
				</div> 
				
			</div> 
			
			{whatWeDo.map((whatWeDo_arr) => {
				const todo_content = whatWeDo_arr['content'];
				return (
			<div className="fancy-feature-four mt-20">
				<div className="bg-wrapper">
					<img src="images/shape/18.svg" alt="" className="shapes shape-right" />
					<img src="images/shape/19.svg" alt="" className="shapes shape-left" />
					<div className="container">
						<div className="title-style-two text-center mb-100 md-mb-50">
							<div className="row">
								<div className="col-xl-8 col-lg-9 col-md-10 m-auto">
									<p>What we do</p>
									<h2>
										<span dangerouslySetInnerHTML={{ __html: whatWeDo_arr.title }}></span>
										<img src="images/shape/line-shape-2.svg" className="m-auto" alt="" />
									</h2>
								</div>
							</div>
						</div>
						<div className="inner-content">
							<img src="images/shape/20.svg" alt="" className="shapes shape-one" />
							<img src="images/shape/21.svg" alt="" className="shapes shape-two" />
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200">
									<div className="block-style-five">
										<div className="icon"><img src="images/icon/20.svg" alt="" /></div>
										<h6 className="title"><span>title 1</span></h6>
										<p>Create customized popups and show the right message at the right time. lorem dummy.</p>
									</div> 
								</div>
								<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200">
									<div className="block-style-five">
										<div className="icon"><img src="images/icon/20.svg" alt="" /></div>
										<h6 className="title"><span>title 1</span></h6>
										<p>Create customized popups and show the right message at the right time. lorem dummy.</p>
									</div> 
								</div>
								<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200">
									<div className="block-style-five">
										<div className="icon"><img src="images/icon/20.svg" alt="" /></div>
										<h6 className="title"><span>title 1</span></h6>
										<p>Create customized popups and show the right message at the right time. lorem dummy.</p>
									</div> 
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				)
			})}
			<div className="fancy-text-block-six mt-250 md-mt-130">
				<div className="container">
					<div className="row">
						<div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
							<div className="title-style-three mb-35">
								<p>GET STARTED IN MINUTES</p>
								<h2>
									<span>3 Main Reaosn to <img src="images/shape/line-shape-3.svg" alt="" /></span>
									Choose us.
								</h2>
							</div>

						
				       		<div id="accordion" className="accordion-style-two pr-5">
							    <div className="card">
							      <div className="card-header" id="headingOne">
							        <h5 className="mb-0">
							          <button className="btn btn-link">
							            Register and create your first support portal
							          </button>
							        </h5>
							      </div>
							      <div id="collapseOne" className="collapse show">
							        <div className="card-body">
							        	<p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
							        </div>
							      </div>
							    </div>
							    <div className="card">
							      <div className="card-header" id="headingTwo">
							        <h5 className="mb-0">
							          <button className="btn btn-link">
							            Manage your dashbaord easily
							          </button>
							        </h5>
							      </div>
							      <div id="collapseTwo" className="collapse">
							        <div className="card-body">
							        	<p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
							        </div>
							      </div>
							    </div>
							    <div className="card">
							      <div className="card-header" id="headingThree">
							        <h5 className="mb-0">
							          <button className="btn btn-link">
							            Start giving support
							          </button>
							        </h5>
							      </div>
							      <div id="collapseThree" className="collapse">
							        <div className="card-body">
							        	<p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
							        </div>
							      </div>
							    </div>
							 </div>
						</div>
					</div>
				</div>

				<div className="img-meta-container" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100">
					<img src="images/assets/feature-img-08.png" alt="" />
					<img src="images/shape/22.svg" alt="" className="shapes shape-one" />
					<img src="images/shape/23.svg" alt="" className="shapes shape-two" />
					<img src="images/shape/24.svg" alt="" className="shapes shape-three" />
					<img src="images/shape/25.svg" alt="" className="shapes shape-four" />
					<img src="images/shape/26.svg" alt="" className="shapes shape-five" />
					<img src="images/shape/27.svg" alt="" className="shapes shape-six" />
					<img src="images/shape/28.svg" alt="" className="shapes shape-seven" />
				</div>
			</div>
			
			<div className="counter-with-icon-one pt-200 md-pt-80">
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
			<div className="fancy-text-block-seven mt-150 md-mt-100">
			{founderNotes.map(founderNote => {
				return(
				<div className="bg-wrapper">
					<img src="images/shape/29.svg" alt="" className="shapes shape-one" />
					<img src="images/shape/30.svg" alt="" className="shapes shape-two" />
					<img src="images/shape/31.svg" alt="" className="shapes shape-three" />
					<img src="images/shape/32.svg" alt="" className="shapes shape-four" />
					<img src="images/shape/33.svg" alt="" className="shapes shape-five" />
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-6 col-sm-10 m-auto" data-aos="fade-right" data-aos-duration="1200">
								<div className="img-holder">
									<img src={founderNote.side_img} alt="" />
									<img src="images/shape/34.svg" alt="" className="shapes shape-six" />
								</div>
							</div>
							<div className="col-xl-6 col-lg-7 ml-auto" data-aos="fade-left" data-aos-duration="1200">
								<div className="quote-wrapper pt-60">
									<img src="images/icon/26.svg" alt="" className="icon" />
								</div>
								<div className="quote-wrapper" dangerouslySetInnerHTML={{ __html: founderNote.content }}>
								</div>
							</div>
						</div>
					</div>
				</div>
				)
			})}
			</div> 
			<div className="fancy-text-block-eight pt-150 pb-200 md-pt-100 md-pb-150">
				<div className="container">
				{features.map(feature => {
					return(
					<div>
					<div className="title-style-two text-center mb-150 md-mb-70">
						<div className="row">
							<div className="col-xl-8 col-lg-9 col-md-10 m-auto">
								<p>Features</p>
								<h2 dangerouslySetInnerHTML={{ __html: feature.title }}></h2>
								<img src="images/shape/line-shape-2.svg" alt="" className="m-auto" />
							</div>
						</div>
					</div>
					<div className="block-style-six pb-150 md-pb-70">
						<div className="row">
							<div className="col-lg-5" data-aos="fade-right" data-aos-duration="1200">
								<img src="images/icon/27.svg" alt="" className="icon pt-35" />
								<div className="text-details md-pb-50" dangerouslySetInnerHTML={{ __html: feature.content }}>
								</div> 
							</div>

							<div className="col-lg-7 col-md-9 m-auto" data-aos="fade-left" data-aos-duration="1200">
								<div className="illustration-holder illustration-one">
									<img src={feature.side_img} alt="" className="ml-auto" />
									<div className="shapes shape-one"></div>
									<div className="shapes shape-two"></div>
									<div className="shapes shape-three"></div>
									<div className="shapes shape-four"></div>
									<div className="shapes shape-five"></div>
									<img src="images/shape/35.svg" alt="" className="shapes shape-six" />
									<img src="images/shape/36.svg" alt="" className="shapes shape-seven" />
								</div>
							</div>
						</div>
					</div>
					</div>
					)
				})}

					<div className="block-style-six pt-150 md-pt-40">
						<div className="row">
							<div className="col-lg-5 order-lg-last" data-aos="fade-left" data-aos-duration="1200">
								<div className="text-details pt-35 md-pb-50">
									<img src="images/icon/29.svg" alt="" className="icon" />
									<h3 className="title font-gilroy-bold">Friendly user interface & easy to use.</h3>
									<p className="text-meta">Deski stand with friendly interface with lots of features that help our team and csutomer to collbarate easily.</p>
									<div className="quote-wrapper">
										<div className="quote-icon d-flex align-items-center justify-content-center"><img src="images/icon/28.svg" alt="" /></div>
										<blockquote>“Our team really feels great to use deski apps specially their quality”</blockquote>
										<div className="name"><strong>Micle Duke,</strong> Product Manager <br />Uber Inc.</div>
									</div>
								</div> 
							</div>

							<div className="col-lg-7 col-md-9 m-auto order-lg-first" data-aos="fade-right" data-aos-duration="1200">
								<div className="illustration-holder illustration-two">
									<img src="images/assets/feature-img-10.png" alt="" className="mr-auto" />
									<div className="shapes shape-one"></div>
									<div className="shapes shape-two"></div>
									<div className="shapes shape-three"></div>
									<div className="shapes shape-four"></div>
									<img src="images/shape/40.svg" alt="" className="shapes shape-five" />
									<img src="images/shape/41.svg" alt="" className="shapes shape-six" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> 
			
				<div className="useable-tools-section-two bg-shape mb-200 md-mb-90">
				<div className="bg-wrapper">
					<div className="shapes shape-one"></div>
					<div className="shapes shape-two"></div>
					<div className="shapes shape-three"></div>
					<div className="shapes shape-four"></div>
					<div className="container">
						<div className="title-style-two text-center mb-70 md-mb-10">
							<div className="row">
								<div className="col-lg-10 col-md-11 m-auto">
									<p>Integrates with your tools</p>
									<h2>Connect deski with the software you
										<span>use every<img src="images/shape/line-shape-2.svg" alt="" /></span>
										day.
									</h2>
								</div>
							</div>
						</div> 

						<div className="icon-wrapper">
							<ul className="clearfix">
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/09.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/10.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/11.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/12.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/13.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/14.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/15.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/16.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/17.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/18.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/19.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/20.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/21.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/22.png" alt="" />
									</div>
								</li>
								<li>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/23.png" alt="" />
									</div>
									<div className="icon-box d-flex align-items-center justify-content-center">
										<img src="images/logo/24.png" alt="" />
									</div>
								</li>
							</ul>
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
	const header_top_content = await fetch('http://127.0.0.1:8000/api/getContent/home/1').then(res => res.json());
	const whatWeDo = await fetch('http://127.0.0.1:8000/api/getContent/home/2').then(res => res.json());
	const founderNotes = await fetch('http://127.0.0.1:8000/api/getContent/home/4').then(res => res.json());
	const features = await fetch('http://127.0.0.1:8000/api/getContent/home/5').then(res => res.json());
	
	
	return {
		props: {
			header_top_content,
			whatWeDo,
			founderNotes,
			features
		}
	}
}