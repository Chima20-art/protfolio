import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
    </div>
  );
}
