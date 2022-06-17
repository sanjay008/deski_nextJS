/* eslint-disable @next/next/no-img-element */
import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Main from '../components/main'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/images/assets/ils-01.1.png'
import Head from 'next/head';
import Script from 'next/script'
import {useEffect} from 'react'
import router from "next/router"
import Link from 'next/link'

const myLoader = ({ src }) => {
	return `http://127.0.0.1:8000/${src}`
}


function withScript(Component, dir, ...srcs){
    function componentWithScriptProp(props){
			// eslint-disable-next-line react-hooks/rules-of-hooks
			srcs.forEach(src => {
				useEffect(() => {
					const script = document.createElement("script");
					script.src = `/${dir}/${src}.js`;
					script.defer = true;
					document.body.appendChild(script);
					return () => { document.body.removeChild(script) };
				});
			});
			return <Component {...props} />
		}
		componentWithScriptProp.getInitialProps = Component.getInitialProps;
		componentWithScriptProp.origGetInitialProps = Component.origGetInitialProps;
		if (process.env.NODE_ENV !== 'production') {
			const name = Component.displayName || Component.name || 'Unknown';
			componentWithScriptProp.displayName = `withScript(${name})`;
		}
		return componentWithScriptProp;
	}

const  Blog = ({header_top_content, blogs}) => {
	
	return (
		<>
			<Main>
			<div className="fancy-hero-five">
				<img src="images/shape/95.svg" alt="" className="shapes shape-one" />
				<img src="images/shape/96.svg" alt="" className="shapes shape-two" />
				<div className="bg-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 m-auto text-center">
								<h6 className="page-title">Our News</h6>
								<h1 className="heading" dangerouslySetInnerHTML={{ __html: header_top_content[0].title }}></h1>
							</div>
						</div>
					</div>
				</div> 
			</div> 
			
			<div className="feature-blog-one blog-page-bg">
				<div className="shapes shape-one"></div>
				<div className="shapes shape-two"></div>
				<div className="shapes shape-three"></div>
				<div className="container">
					<div className="row">
					{blogs.map((blog, index) => {
						return(
							<div className="col-lg-4 col-md-6" key={"blog_"+index} data-aos="fade-up" data-aos-duration="1200">
								<div className="post-meta">
									<img src={blog.img} alt="" className="image-meta" />
									<div className="tag">{blog.category.category}</div>
									<Link href="/">
										<h3><a className="title">{blog.title}</a></h3>
									</Link>
									<Link href="/">
									<a className="read-more d-flex justify-content-between align-items-center">
										<span>Read More</span>
										<i className="flaticon-right-arrow"></i>
									</a>
									</Link>
								</div>
							</div>
						)
					})}
					</div>
					<div className="text-center mt-30 md-mt-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
						<a href="#" className="theme-btn-one">Show More</a>
					</div>
				</div>
			</div>
			</Main>
		</>
	)
}

export default withScript(Blog, "js", "jquery.min", "popper.min", "bootstrap.min", "custom", "aos", "jquery.appear", "jquery.countTo", "slick.min", "jquery.fancybox.min", "theme")

export async function getServerSideProps() {
	const header_top_content = await fetch('http://organickuku.com/public/api/getContent/blog/1').then(res => res.json());
	const blogs = await fetch('http://organickuku.com/public/api/getAllBlogs').then(res => res.json());
	return {
		props: {
			header_top_content,
			blogs
		}
	}
}