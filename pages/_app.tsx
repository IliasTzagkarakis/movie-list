import Layout from '../comps/Layout';
import '../styles/global.css';
import { AppProps } from 'next/app'

function MyApp({Component, pageProps}: AppProps){
    return (
        <Layout>
            <Component{...pageProps}/>
        </Layout>
    ) 
}

export default MyApp;