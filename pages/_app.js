import '../styles/globals.css'
import Header from '../components/header/Header'


function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Header />
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
