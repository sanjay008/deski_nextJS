import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'

export default function Home() {
	return (
		<>
			<h1>About</h1>
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

