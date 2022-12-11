import '../styles/globals.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <div className="max-w-5xl mx-auto px-8">
      <Header />
      <Component {...pageProps} />
      
    </div>
    <Footer />
    </div>
  )
}

export default MyApp
