import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/Home.module.css'
import DisplaySurah_Index from './display-index';

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>The Holy Quran</title>
      </Head>
      <DisplaySurah_Index/>
    </div>
  );
}
