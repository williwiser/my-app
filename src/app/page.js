import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>William Wani</h1>
        <a href="#">Contact</a>
      </div>
    </main>
  );
}
