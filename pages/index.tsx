import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Movie List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Hello Andrea this is my first App. I hope your eyes will not hurt! Thank you for your help! I am looking forward for your opinion as soon as you check this!</p>
      <Link href='movies'>
        <a className={styles.btn}>See Movies Listing</a>
      </Link>
    </div>
    </>
  )
}
