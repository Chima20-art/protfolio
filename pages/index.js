import Head from "next/head";
import Image from "next/image";
import styles from "./home/home.module.css";
import Header from "../components/header/header.js";
import Home from "./home/home.js";
import { motion } from "framer-motion";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Talk from "./talk";

export default function Homy() {
  return (
    <div>
      <Home />
      <Header Class={styles.header} />
      <About ID="about" />
      <Skills ID="skills" />
      <Projects ID="projects" />
      <Talk ID="talk" />
    </div>
  );
}
