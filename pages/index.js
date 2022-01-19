import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header.js";
import Home from "../components/home/home.js";
import About from "../components/about/About";

import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects/projects";
import Talk from "../components/Talk /talk";

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
