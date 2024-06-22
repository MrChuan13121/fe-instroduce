import styles from "./page.module.css";
import HomePage from "./pages/home/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage></HomePage>
    </main>
  );
}
