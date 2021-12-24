import react, { Children } from "react"
import Head from 'next/head'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout: React.FC = ({children}) => {
    return <div>
        <Head>
            <title>Encoder Image</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="../public/icon.ico"/>
        </Head>
        <main className="bg-grey-500 font-mono h-screen justify-between mb-72">
            <Navbar/>
            {children}
            <Footer/>
        </main>
    </div>
}
export default Layout