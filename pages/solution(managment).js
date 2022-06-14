import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<div className="fancy-hero-one">
				<div className="container">
					<div className="row">
						<div className="col-xl-10 m-auto">
							<h2 className="font-rubik">Get effective solution for your business</h2>
						</div>
						<div className="col-xl-9 m-auto">
							<p className="font-rubik">With deski, get all kind of business solution to start your journey</p>
							<a href="contact-us(light).html" className="theme-btn-one btn-lg mt-50 md-mt-30">Contact US</a>
						</div>
					</div>
				</div>
				<div className="bubble-one"></div>
				<div className="bubble-two"></div>
				<div className="bubble-three"></div>
				<div className="bubble-four"></div>
				<div className="bubble-five"></div>
				<div className="bubble-six"></div>
			</div> 
			
			<div className="fancy-text-block-four pt-130 pb-120 md-pt-100 md-pb-80">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="title-style-one mb-40 md-mb-20">
								<h2>For all kinds of Teams</h2>
								<p className="font-rubik">Duis aute irure dolor in reprehenderit in voluptate velit io cillum dolore eu fugiat nulla pariatur non labrum.</p>
							</div>
						</div>
					</div>

					<div className="wrapper">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-three">
									<div className="icon"><img src="images/icon/09.svg" alt="" /></div>
									<h4>Project management</h4>
									<p className="font-rubik">tempor incididunt ut labor culpa dolore magna aliqua. Ut enim qui minim veniam, </p>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-three">
									<div className="icon"><img src="images/icon/10.svg" alt="" /></div>
									<h4>Customer Support</h4>
									<p className="font-rubik">Excepteur sint occaecat cupidatat non proident, sunt in culpa non officia.</p>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-three">
									<div className="icon"><img src="images/icon/11.svg" alt="" /></div>
									<h4>Marketing</h4>
									<p className="font-rubik">consectetur adipiscing elit, sed dou eiusmod tempor incididu ut lab et dolore.</p>
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div> 
			
						<div className="fancy-text-block-five pt-130 pb-160 md-pt-100 md-pb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 ml-auto">
							<div className="title-style-one mb-50 md-mb-30">
								<h2>For all kinds of Startup</h2>
								<p className="font-rubik">Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.</p>
							</div> 
						</div>
					</div>

					<div className="wrapper">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-four">
									<div className="icon"><img src="images/icon/12.svg" alt="" /></div>
									<h4>Media & Hospital</h4>
									<p className="font-rubik">Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim </p>
									<a href="#"><i className="flaticon-right-arrow"></i></a>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-four">
									<div className="icon"><img src="images/icon/13.svg" alt="" /></div>
									<h4>Educational</h4>
									<p className="font-rubik">Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim </p>
									<a href="#"><i className="flaticon-right-arrow"></i></a>
								</div> 
							</div>
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
								<div className="block-style-four">
									<div className="icon"><img src="images/icon/14.svg" alt="" /></div>
									<h4>Financial Service</h4>
									<p className="font-rubik">Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim </p>
									<a href="#"><i className="flaticon-right-arrow"></i></a>
								</div> 
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

