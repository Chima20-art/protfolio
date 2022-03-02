import Head from "next/head";
import Image from "next/image";
import styles from "./home/home.module.css";
import Header from "../components/header/header.js";
import Home from "./home/home.js";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Talk from "./Talk /talk";

export default function Homy() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Talk />
    </div>
  );
}
