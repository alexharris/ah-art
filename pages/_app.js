import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alex Harris Art Website!!!!!</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>        
      </Head>
      <div className="max-w-6xl mx-auto px-8 min-h-[80vh]">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
      <script src="https://cdn.usefathom.com/script.js" data-site="DDUYXUPA" defer></script>
    </div>
  )
}

export default MyApp
