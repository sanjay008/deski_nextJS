/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Main from '../../components/main'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home({portfolio}) {
	return (
		<>
			<div className="portfolio-details-one mt-75 mb-150 md-mb-100">
				<div className="container">
					<div className="row">
						<div className="col-xl-11 m-auto">
							<div className="header text-center">
								<div className="tag">{portfolio.category.category}</div>
								<div className="title-style-ten">
									<h2>{portfolio.title}</h2>
								</div>
								<ul className="d-flex justify-content-center social-icon mt-35">
									<li><Link href="#"><a ><i className="fa fa-facebook" aria-hidden="true"></i></a></Link></li>
									<li><Link href="#"><a ><i className="fa fa-twitter" aria-hidden="true"></i></a></Link></li>
									<li><Link href="#"><a><i className="fa fa-linkedin" aria-hidden="true"></i></a></Link></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="main-content mt-75">
							<img src={portfolio.img} alt="" className="mb-90 md-mb-50" />
						<div className="row">
							<div className="col-xl-11 m-auto">
								<div className="row">
									<div className="col-md-4 order-md-last">
										<ul className="project-info clearfix pl-xl-5">
											<li>
												<strong>DATe</strong>
												<span>23 July, 2020</span>
											</li>
											<li>
												<strong>Client</strong>
												<span>Mariona Adisson, USA</span>
											</li>
											<li>
												<strong>Project Type</strong>
												<span>3D Design, Apartment</span>
											</li>
											<li>
												<strong>Duration</strong>
												<span>36 Days</span>
											</li>
										</ul>
									</div>
									<div className="col-md-8 order-md-first" dangerouslySetInnerHTML={{ __html: portfolio.content}}></div>
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

export async function getServerSideProps({ params }) {
	const portfolioId = params.portfolioId.replace(/\-/g, '+')
	const portfolio = await fetch(`http://organickuku.com/public/api/getSinglePortfolio/${portfolioId}`).then(res => res.json());
	return {
		props: {
			portfolio,
		}
	}
}

