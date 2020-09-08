import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Brad Dunn
        </h1>
        <p className={styles.description}>
          Software Engineer. Writer. Occasionally has good ideas.
        </p>
        <SocialIcons />
      </main>
    </div>
  )
}
