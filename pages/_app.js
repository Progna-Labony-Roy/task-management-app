import AuthProvider from '../components/AuthProvider'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </AuthProvider>
    </QueryClientProvider>
    </>
  )
}
