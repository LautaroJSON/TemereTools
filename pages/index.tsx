import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Temere Tools!</title>
        <meta name="description" content="Herramientas utiles!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
      </main>
    </>
  );
}
