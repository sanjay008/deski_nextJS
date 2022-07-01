/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

const myLoader = ({ src }) => {
	return `http://organickuku.com/${src}`
}

export default function SolutrionManagement({header_content, ourTeam, startUp}) {
	const temes = JSON.parse(ourTeam[0].content);
	const startUpTopics = JSON.parse(startUp[0].content);
	
	return (
		<>
			<div className="fancy-hero-one">
				<div className="container">
					<div className="row">
						<div className="col-xl-10 m-auto">
							<h2 className="font-rubik" dangerouslySetInnerHTML={{ __html: header_content[0].title}}></h2>
						</div>
						<div className="col-xl-9 m-auto">
							<p className="font-rubik" dangerouslySetInnerHTML={{ __html: header_content[0].subtitle}}></p>
							<Link href="/contack_us">
								<a className="theme-btn-one btn-lg mt-50 md-mt-30" >Contact US</a>
							</Link>
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
								<h2 dangerouslySetInnerHTML={{ __html: ourTeam[0].title}}></h2>
								<p className="font-rubik" dangerouslySetInnerHTML={{ __html: ourTeam[0].subtitle}}></p>
							</div>
						</div>
					</div>

					<div className="wrapper">
						<div className="row justify-content-center">
						{temes.map((team, index)=> {
							return(
								<div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-duration="1200">
									<div className="block-style-three">
										<div className="icon"><img src="images/icon/09.svg" alt="" /></div>
										<h4 dangerouslySetInnerHTML={{ __html: team.title}}></h4>
										<div dangerouslySetInnerHTML={{ __html: team.content}}></div>
									</div> 
								</div>
							)
						})}
						</div>
					</div>
				</div>
			</div> 
			
			<div className="fancy-text-block-five pt-130 pb-160 md-pt-100 md-pb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 ml-auto">
							<div className="title-style-one mb-50 md-mb-30">
								<h2 dangerouslySetInnerHTML={{ __html: startUp[0].title}}></h2>
								<p className="font-rubik" dangerouslySetInnerHTML={{ __html: startUp[0].title}}></p>
							</div> 
						</div>
					</div>

					<div className="wrapper">
						<div className="row justify-content-center">
						{startUpTopics.map((topic, index)=> {
							return(
								<div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-duration="1200">
									<div className="block-style-four">
										<div className="icon"><img src="images/icon/12.svg" alt="" /></div>
										<h4 dangerouslySetInnerHTML={{ __html: topic.title}}></h4>
										<div className="font-rubik" dangerouslySetInnerHTML={{ __html: topic.content}}></div>
									</div> 
								</div>
							)
						})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

SolutrionManagement.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}

export async function getStaticProps() {
	const header_content = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/solution/1').then(res => res.json());
	const ourTeam = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/solution/2').then(res => res.json());
	const startUp = await fetch('http://54.159.166.189/organickuku/deski-backend/public/index.php/api/getContent/solution/3').then(res => res.json());
	
	return {
		props: {
			header_content,
			ourTeam,
			startUp
		}
	}
}

