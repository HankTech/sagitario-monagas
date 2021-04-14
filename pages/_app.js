import App from 'next/app';
import { createContext } from 'react';
import Head from 'next/head';
import { fetchApi } from '../libs/api';
import { getApiMedia } from '../libs/media';

// css
import '../styles/index.css';
import  '../styles/markdown-styles.css';

//	Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {

 	const { global } = pageProps
	
 	return (
 		<>
 			<Head>
				<link rel="shortcut icon" href={`${getApiMedia(global.favicon)}`} />
 			</Head>

			<GlobalContext.Provider value={global}>
				<Component {...pageProps} />
			</GlobalContext.Provider>
 		</>
 	)
}

MyApp.getInitialProps = async (ctx) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx);

	// Fetch global site settings from API
	const global = await fetchApi("/global");

	// Pass the data to our page via props
	return {...appProps, pageProps: { global } };
}

export default MyApp;
