import { AppProps } from 'next/app'
import Layout from "../../component/Layout"
import Navbar from '../../component/Navbar'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp