import AuthProvider from '../components/AuthProvider'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <AuthProvider>
    <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </AuthProvider>
    </>
  )
}
