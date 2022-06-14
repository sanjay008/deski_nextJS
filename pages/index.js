import React from "react"
import * as ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import Main from '../components/main'

export default function Home() {
	return (
		<>
			<h1>This is index</h1>
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

}