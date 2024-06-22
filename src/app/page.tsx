import styles from "./page.module.css";
import HomePage from "./pages/home/home.page";
import Index from "./pages/index";
import Introduce from "./pages/introduce/introduce"

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage></HomePage>
      <Index></Index>
      <Introduce></Introduce>
    </main>
  );
}
