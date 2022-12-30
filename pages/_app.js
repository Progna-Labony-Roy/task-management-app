import AuthProvider from "../components/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "next-themes";


const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
     
        <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar></Navbar>
          <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
          </ThemeProvider>
          <ToastContainer />
          <Footer></Footer>
          </QueryClientProvider>
        </AuthProvider>
    </>
  );
}
