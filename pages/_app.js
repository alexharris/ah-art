import '../styles/globals.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div>
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
