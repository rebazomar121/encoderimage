import { AppProps } from 'next/app'
import Layout from "../../component/Layout"
import Navbar from '../../component/Navbar'
import UserProvider from "../../context/context"
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </>
  )
}

export default MyApp