import react, { Children } from "react"
import Head from 'next/head'
import Navbar from "./Navbar"

const Layout: React.FC = ({children}) => {
    return <div>
        <Head>
            <title>Encoder Image</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className="bg-grey-500 font-mono h-screen">
            <Navbar/>
            {children}
        </main>
    </div>
}
export default Layout