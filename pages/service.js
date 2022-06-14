import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Services({ header_content }) {
	console.log(header_content);
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
						<div className="col-lg-6 order-lg-last">
							<div className="text-wrapper pt-0">
								<div className="title-style-two mb-35 md-mb-20">
									<h2><span>Service we offer is  <img src="images/shape/line-shape-5.svg" alt="" /> </span>
										specifically designed to meet your needs.
									</h2>
								</div> 
								<p>With Benefits from deski Pro,  Earn rewards & Score discounts on purchases* Foryourself and your customers.</p>
							</div>
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className="video-box">
								<img src="images/media/img_106.png" alt="" />
								<a data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" className=" fancybox video-button d-flex align-items-center justify-content-center"><img src="images/icon/170.svg" alt="" /></a>
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
								<span>Explore Services<img src="images/shape/line-shape-2.svg" alt="" /></span>
							</h2>
							<div className="sub-text mt-15">Get to know all deski features, that are part of the complex multi-channel</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-five" onclick="location.href='service-detailsV1.html';">
									<div className="icon"><img src="images/icon/20.svg" alt="" /></div>
									<h6 className="title"><span>Smart popups</span></h6>
									<p>Create customized popups and show the right message at the right time. lorem dummy.</p>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<div className="block-style-five" onclick="location.href='service-detailsV1.html';">
									<div className="icon"><img src="images/icon/21.svg" alt="" /></div>
									<h6 className="title"><span>Embeded Forms</span></h6>
									<p>Collect website leads with embedded forms and integrate easily.</p>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
								<div className="block-style-five" onclick="location.href='service-detailsV1.html';">
									<div className="icon"><img src="images/icon/22.svg" alt="" /></div>
									<h6 className="title"><span>Autoresponder</span></h6>
									<p>Send welcome email to your new subscribers  with a code.</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-five" onclick="location.href='service-detailsV1.html';">
									<div className="icon"><img src="images/icon/174.svg" alt="" /></div>
									<h6 className="title"><span>Online Marketing</span></h6>
									<p>Create customized popups and show the right message at the right time. lorem dummy.</p>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<div className="block-style-five" onclick="location.href='service-detailsV1.html';">
									<div className="icon"><img src="images/icon/176.svg" alt="" /></div>
									<h6 className="title"><span>Web Design</span></h6>
									<p>Collect website leads with embedded forms and integrate easily.</p>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
								<div className="block-style-five" onclick="location.href='service-detailsV1.html';">
									<div className="icon"><img src="images/icon/175.svg" alt="" /></div>
									<h6 className="title"><span>Mobile Notification</span></h6>
									<p>Send welcome email to your new subscribers  with a code.</p>
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div> 
			
						<div className="fancy-text-block-twelve mt-170 md-mt-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
							<div className="text-wrapper">
								<div className="title-style-three">
									<h6>Why us?</h6>
									<h2>
										<span>Why your should<img src="images/shape/line-shape-6.svg" alt="" /></span>
										choose deski.
									</h2>
								</div>
								<p className="sub-text pb-35">A ticketing system is a tool, primarily for customer service. It helps customer representativ inquiries from one interface without any struggles.</p>
								<ul className="list-item-one">
									<li>Amazing communication.</li>
									<li>Best trendinf designing experience.</li>
									<li>Email & Live chat.</li>
								</ul>
							</div> 
						</div>

						<div className="col-lg-5 ml-auto" data-aos="fade-left" data-aos-duration="1200">
							<div className="img-gallery">
								<img src="images/media/img_37.png" alt="" />
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
	const header_content = await fetch('http://127.0.0.1:8000/api/getContent/services/1').then(res => res.json());
	const categories = await fetch('http://127.0.0.1:8000/api/getCategory/portfolios').then(res => res.json());
	const allPortfolios = await fetch('http://127.0.0.1:8000/api/getPortfolios').then(res => res.json());
	return {
		props: {
			header_content,
			categories,
			allPortfolios,
		}
	}
}

