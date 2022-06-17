import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	}, []);
	const getLayout = Component.getLayout || ((page) => page)
	return getLayout(<Component {...pageProps} />)
}

export default MyApp
