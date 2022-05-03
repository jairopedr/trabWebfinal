import '../styles/styles.css';
import Head from "next/head";
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
    return (
      <div className='body'> 
        <Head> 
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        </Head> 
        <Layout>
          <Component {...pageProps} />   
        </Layout>
      </div>
  )
}

export default MyApp;
