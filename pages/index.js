import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header.js";
import Home from "../components/home/home.js";
import Skills from "../components/skills/skills";

export default function Homy() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Home />
    </div>
  );
}
