import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manage Your Task - TaskManager</title>
        <meta name="description" content="Manage Your Task" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div>
        <img src='/task.jpg'></img>
      </div>
      <Footer></Footer>
    </div>
  )
}
