import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Contact from "./component/contact";


export default function Home() {
  return (
    <>
      <Head>
        <title>Contact form</title>
        <meta name="description" content="Contac form with nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact></Contact>

    </>
  );
}
