import Head from "next/head";
import Image from "next/image";
import styles from "./home/home.module.css";
import Header from "./header/header.js";
import Home from "./home/home.js";
import About from "./about/About";

import Skills from "./skills/skills";
import Projects from ".//projects/projects";
import Talk from "./Talk /talk";

export default function Homy() {
  return (
    <div>
      <Header className={styles.header} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Talk />
    </div>
  );
}
