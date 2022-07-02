/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
							{categories.map((category_item, index) => {
								return(
									<button type="button" key={index} className="control" data-filter={category_item.slug}>{category_item.category}</button>
								)
							})}
				        </div>

				        <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
							{allPortfolios.map((portfolio,index) => {
								return(
									<div className="mix design" key={index}>
										<div className="portfolio-block-two position-relative">
											<img src={portfolio.img} alt="" className="w-100 h-100 tran4s img-meta" />
											<Link href={portfolio.img}>
											<a data-fancybox="" className="fancybox d-flex align-items-center justify-content-center"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
											</Link>
											<div className="hover-content">
												<h3>
												<Link href={"portfolio/"+portfolio.id}>
												<a >{portfolio.title}</a>
												</Link>
												</h3>
												<div className="tag">{portfolio.category.category}</div>
											</div>
										</div> 
									</div>
								)
							})}
				        	
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
	const header_content = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/portfolio/1').then(res => res.json());
	const categories = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getCategory/portfolios').then(res => res.json());
	const allPortfolios = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getPortfolios').then(res => res.json());
	return {
		props: {
			header_content,
			categories,
			allPortfolios,
		}
	}
}

