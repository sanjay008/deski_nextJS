import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
		
		<div className="service-details-one pt-150 md-pt-100">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-8 order-lg-last">
							<div className="details-wrapper pl-xl-5">
								<h2 className="font-gordita">World best web design service provider.</h2>
								<p className="sub-heading font-gordita pt-30 pb-70 md-pb-40">Commonly used in the graphic, prit quis due & publishing indust for previewing lightly  visual mockups.</p>
								<img src="images/gallery/img_42.jpg" alt="" className="img-meta w-100" />
								<p className="pt-40 pb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum.</p>
								<div className="row">
									<div className="col-md-6">
										<h4 className="font-gordita pt-40">Our Goal</h4>
										<ul className="list-item-one">
											<li>Various analysis options.</li>
											<li>Page Load (time, number of requests).</li>
											<li>Big data analysis.</li>
										</ul>
									</div>
									<div className="col-md-6">
										<h4 className="font-gordita pt-40">The Challange</h4>
										<p>Deski Web offers a complete lineup of features from any major Maecena quis interdum, orci at euis  dapibus, mass ante pharetra tellus massa ante pharetra tellus.</p>
									</div>
								</div>
								<h3 className="font-gordita pt-90 pb-60 md-pt-50">Any Questions find here.</h3>
								<div id="accordion" className="accordion-style-three">
								    <div className="card">
								      <div className="card-header" id="headingOne">
								        <h5 className="mb-0">
								          <button className="btn btn-link collapsed">
								            How does the free trial work?
								          </button>
								        </h5>
								      </div>
								      <div id="collapseOne" className="collapse">
								        <div className="card-body">
								        	<p>It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".</p>
								        </div>
								      </div>
								    </div>
								    <div className="card">
								      <div className="card-header" id="headingTwo">
								        <h5 className="mb-0">
								          <button className="btn btn-link collapsed">
								            How do you weigh different criteria in your process?
								          </button>
								        </h5>
								      </div>
								      <div id="collapseTwo" className="collapse">
								        <div className="card-body">
								        	<p>That's right. We want to make Ticket Tailor as affordable as possible for event organisers of all sizes. You also have the option to pass on any ticketing costs to your customers through a booking fee. We always aim to be the best value on the market so please let us know if you think you can find a similar product for a lower price.</p>
								        </div>
								      </div>
								    </div>
								    <div className="card">
								      <div className="card-header" id="headingThree">
								        <h5 className="mb-0">
								          <button className="btn btn-link collapsed">
								            What does First Round look for in an idea?
								          </button>
								        </h5>
								      </div>
								      <div id="collapseThree" className="collapse">
								        <div className="card-body">
								        	<p>Yes, you can add any booking fee you like to the ticket price, which means all your fees are covered and you get to keep the entire face value of the ticket price. You're in total control.</p>
								        </div>
								      </div>
								    </div>
								    <div className="card">
								      <div className="card-header" id="headingFour">
								        <h5 className="mb-0">
								          <button className="btn btn-link collapsed">
								           	What do you look for in a founding team?
								          </button>
								        </h5>
								      </div>
								      <div id="collapseFour" className="collapse">
								        <div className="card-body">
								        	<p>All the subscriptions of that plan will retain to stay unless we explicitly move them to any other plan. The deletion is best a "soft" delete that stops the plan from permitting newsubscriptions.</p>
								        </div>
								      </div>
								    </div>
								</div>
							</div> 
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 order-lg-first">
							<div className="sidebar md-mt-100">
								<div className="category-list">
									<h4 className="font-gordita">Services</h4>
									<ul>
										<li><a href="#" className="active">Web Design</a></li>
										<li><a href="#">Mockup</a></li>
										<li><a href="#">Print Design</a></li>
										<li><a href="#">Logo</a></li>
										<li><a href="#">Mobile Application</a></li>
										<li><a href="#">Branding</a></li>
										<li><a href="#">Illusutration</a></li>
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

Home.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}

