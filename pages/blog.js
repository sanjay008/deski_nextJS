import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<div className="fancy-hero-five">
				<img src="images/shape/95.svg" alt="" className="shapes shape-one" />
				<img src="images/shape/96.svg" alt="" className="shapes shape-two" />
				<div className="bg-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 m-auto text-center">
								<h6 className="page-title">Our News</h6>
								<h1 className="heading">
									<span>Our inside stories<img src="images/shape/line-shape-11.svg" alt="" /></span>
									lorem que
								</h1>
							</div>
						</div>
					</div>
				</div> 
			</div> 
						<div className="blog-page-white-bg blog-v4">
				<div className="container">
					<div className="wrapper">
						<div className="post-meta" data-aos="fade-up" data-aos-duration="1200">
							<img src="images/blog/media_24.png" alt="" className="image-meta" />
							<div className="post">
								<div className="date">23 Apr. 2020</div>
								<h3><a href="blog-details-v1.html" className="title">Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.</a></h3>
								<p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..</p>
								<a href="blog-details-v1.html" className="read-more">
									<span>Continue Reading</span>
									<i className="fa fa-angle-right" aria-hidden="true"></i>
								</a>
							</div>
						</div> 
						<div className="post-meta text-post" data-aos="fade-up" data-aos-duration="1200">
							<div className="post">
								<div className="date">23 Apr. 2020</div>
								<h3><a href="blog-details-v1.html" className="title">Replace The Negatives In your life with positives.</a></h3>
								<p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation..</p>
								<a href="blog-details-v1.html" className="read-more">
									<span>Continue Reading</span>
									<i className="fa fa-angle-right" aria-hidden="true"></i>
								</a>
							</div>
						</div> 
						<div className="post-meta" data-aos="fade-up" data-aos-duration="1200">
							<img src="images/blog/media_25.png" alt="" className="image-meta" />
							<div className="post">
								<div className="date">23 Apr. 2020</div>
								<h3><a href="blog-details-v1.html" className="title">Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.</a></h3>
								<p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..</p>
								<a href="blog-details-v1.html" className="read-more">
									<span>Continue Reading</span>
									<i className="fa fa-angle-right" aria-hidden="true"></i>
								</a>
							</div>
						</div> 
						<div className="post-meta" data-aos="fade-up" data-aos-duration="1200">
							<img src="images/blog/media_26.png" alt="" className="image-meta" />
							<div className="post">
								<div className="date">23 Apr. 2020</div>
								<h3><a href="blog-details-v1.html" className="title">Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.</a></h3>
								<p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..</p>
								<a href="blog-details-v1.html" className="read-more">
									<span>Continue Reading</span>
									<i className="fa fa-angle-right" aria-hidden="true"></i>
								</a>
							</div>
						</div> 
						<div className="post-meta" data-aos="fade-up" data-aos-duration="1200">
							<img src="images/blog/media_27.png" alt="" className="image-meta" />
							<div className="post">
								<div className="date">23 Apr. 2020</div>
								<h3><a href="blog-details-v1.html" className="title">Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.</a></h3>
								<p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..</p>
								<a href="blog-details-v1.html" className="read-more">
									<span>Continue Reading</span>
									<i className="fa fa-angle-right" aria-hidden="true"></i>
								</a>
							</div>
						</div> 

						<div className="page-pagination-two pt-30">
							<ul className="d-flex align-items-center justify-content-center">
								<li className="arrow"><a href="#"><i className="flaticon-right-arrow"></i></a></li>
								<li className="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li>...</li>
								<li><a href="#">Last</a></li>
								<li className="arrow"><a href="#"><i className="flaticon-right-arrow"></i></a></li>
							</ul>
						</div>
					</div> 
				</div>
			</div> 
			
			<div className="fancy-short-banner-four m0 pt-150 md-pt-100">
				<div className="container">
					<div className="bg-wrapper">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="title">
									<h6>Subscribe Now</h6>
									<h2>Subscriber to our Newsletter</h2>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-wrapper">
									<form action="#">
										<input type="text" placeholder="Email address" />
										<button>Subscribe</button>
									</form>
									<p className="font-rubik">Already a member? <a href="login.html">Sign in.</a></p>
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

