import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>William Wani</h1>
        <a href="#">Contact</a>
      </div>
      <section className={styles.sn}>
        <div className={styles.description}>
          <h1>Hi there, I made a website for CS3</h1>
          <p>Just your average developer, nothing too fancy...</p>
        </div>
      </section>
    </main>
  );
}
