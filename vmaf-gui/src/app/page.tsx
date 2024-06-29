import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          hello
        </p>
      </div>
      <div className={styles.description}>
        <p>
          Welcome to the webapp
        </p>
      </div>
    </main>
  );
}
