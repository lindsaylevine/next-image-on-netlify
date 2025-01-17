import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Image on Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Image on Netlify!</h1>

        <p>
          <Image
            src="/jason-rogers.jpg"
            alt="Jason in the Mr. Rogers “I’m not very good at it” meme."
            layout="responsive"
            quality="75"
            width="600"
            height="600"
          />
          <Image
            src="/spongebob.gif"
            alt="spongebob gif"
            layout="responsive"
            quality="75"
            width="600"
            height="600"
          />
        </p>
      </main>
    </div>
  );
}
