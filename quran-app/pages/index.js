import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/Home.module.css'
import HomePage from './HomePage';

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>The Holy Quran</title>
      </Head>
      <HomePage/>
    </div>
  );
}
