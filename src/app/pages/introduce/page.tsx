import Head from 'next/head';
import Link from 'next/link';
import styles from '../introduce/introduce.page.module.css';

export default function IntroduceScreen() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Next.js App</title>
        <meta name="description" content="Simple Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Next.js!</span>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.imageContainer}>
          <img src="/image1.jpg" alt="Image 1" className={styles.image} />
          <img src="/image2.jpg" alt="Image 2" className={styles.image} />
        </div>

        <p className={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan
          accumsan diam, vel posuere felis vestibulum eget. In hac habitasse platea
          dictumst.
        </p>

      
      </div>

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
