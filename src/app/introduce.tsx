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
      <h1>Introduce Page</h1>
      <p>This is the Introduce page content.</p>
    </div>
  );
}
