import react, { Children } from "react"
import Head from 'next/head'

const Layout: React.FC = ({children}) => {
    return <div>
        <Head>
            <title>Encoder Image</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
            {children}
        </main>
    </div>
}
export default Layout