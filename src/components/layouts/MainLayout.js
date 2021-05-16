import Head from 'next/head'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'


const MainLayout = ({children, pageTitle, description, KeyWords, ...props}) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta http-equiv="Content-Language" content="th" />
                <meta name="KeyWords" content={KeyWords} />	
                <meta name="author" content="IT Genius Engineering Ltd., Thailand" />
                <meta name="google-site-verification" content="xWDq6KBs5hxoNdA0AX8Zm29nSQsKc1vO5SU_bIk_slM" />
                <meta property="og:image" content={props.image}/>
                <meta property="og:url" content="https://www.itgenius.co.th"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="fb:pages" content="451199698272010" />
                <meta property="fb:app_id" content="1155502107965030" />
            </Head>
            
            <Navbar />

            <main className="pt-20">
                {children}
            </main>

            <Footer />
           
        </>
    )
}

export default MainLayout
