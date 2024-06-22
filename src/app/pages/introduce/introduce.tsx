import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react'; 
import styles from '../introduce/introduce.page.module.css';

export default function IntroduceScreen() {
  const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); 
  };

  const handleReset = () => {
    setCount(0); 
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Next.js App</title>
        <meta name="description" content="Simple Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Next.js!</span>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Find more about Next.js</p>
            </a>
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <img src="/image1.jpg" alt="Image 1" className={styles.image} />
          <img src="/image2.jpg" alt="Image 2" className={styles.image} />
        </div>

        <p className={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan
          accumsan diam, vel posuere felis vestibulum eget. In hac habitasse platea
          dictumst.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleIncrement}>
            Increment
          </button>
          <button className={styles.button} onClick={handleReset}>
            Reset
          </button>
          <p>Count: {count}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
