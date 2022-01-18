import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header.js";
import Home from "../components/home/home.js";

export default function Homy() {
  return (
    <div>
      <Header className={styles.header} />
      <Home />
    </div>
  );
}
