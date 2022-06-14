import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home({ header_content, categories, allPortfolios }) {
	return (
		<>
			<div className="fancy-hero-six">
				<div className="container">
					<h1 className="heading">{header_content[0].title}</h1>
					<p className="sub-heading">{header_content[0].subtitle}</p>
				</div>
			</div>
			
			<div className="fancy-portfolio-two lg-container">
				<div className="container">
					<div className="top-border bottom-border pb-130 md-pb-90">
						<div className="controls po-control-one text-center mb-90 md-mb-50 mt-90 md-mt-60">
				            <button type="button" className="control" data-filter="all">All</button>
							{categories.map(category_item => {
								return(
									<button type="button" className="control" data-filter={category_item.slug}>{category_item.category}</button>
								)
							})}
				        </div>

				        <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
							{allPortfolios.map(portfolio => {
								return(
									<div className="mix design">
										<div className="portfolio-block-two position-relative">
											<img src={portfolio.img} alt="" className="w-100 h-100 tran4s img-meta" />
											<a data-fancybox="" href={portfolio.img} className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
											<div className="hover-content">
												<h3><a href={"portfolio/"+portfolio.id}>{portfolio.title}</a></h3>
												<div className="tag">{portfolio.category.category}</div>
											</div>
										</div> 
									</div>
								)
							})}
				        	<div className="mix design">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_01.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="images/gallery/img_01.jpg" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">The Gang Blue</a></h3>
				        				<div className="tag">Development, Design</div>
				        			</div>
				        		</div> 
				        	</div>
				        	<div className="mix dev brand">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_02.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-play" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Core WordPress</a></h3>
				        				<div className="tag">Development, Plugin</div>
				        			</div> 
				        		</div> 
				        	</div>
				        	<div className="mix plugin brand">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_03.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="images/gallery/img_03.jpg" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Platform Audit</a></h3>
				        				<div className="tag">Development, Branding</div>
				        			</div> 
				        		</div>
				        	</div>
				        	<div className="mix dev design">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_04.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-play" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Medieval origins</a></h3>
				        				<div className="tag">Development, Design</div>
				        			</div> 
				        		</div> 
				        	</div>
				        	<div className="mix mixL plugin">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_05.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="images/gallery/img_05.jpg" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Designer’s Checklist</a></h3>
				        				<div className="tag">Development, Plugin</div>
				        			</div> 
				        		</div> 
				        	</div>
				        	<div className="mix design">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_06.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="images/gallery/img_06.jpg" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Motivation defining Moment</a></h3>
				        				<div className="tag">Development, Design</div>
				        			</div>
				        		</div>
				        	</div>
				        	<div className="mix plugin brand">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_07.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-play" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Our experience WordCamp</a></h3>
				        				<div className="tag">Development, Branding</div>
				        			</div> 
				        		</div> 
				        	</div>
				        	<div className="mix dev brand">
				        		<div className="portfolio-block-two position-relative">
				        			<img src="images/gallery/img_08.jpg" alt="" className="w-100 h-100 tran4s img-meta" />
				        			<a data-fancybox="" href="images/gallery/img_08.jpg" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
				        			<div className="hover-content">
				        				<h3><a href="portfolio-detailsV1.html">Lets catch up amd</a></h3>
				        				<div className="tag">Development, Design</div>
				        			</div> 
				        		</div> 
				        	</div>
				        </div> 

				        <div className="text-center mt-50"><a href="#" className="theme-btn-nine">Load More</a></div>
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
	const header_content = await fetch('http://127.0.0.1:8000/api/getContent/portfolio/1').then(res => res.json());
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
