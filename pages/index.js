import Head from "next/head";
import Image from "next/image";
import styles from "./home/home.module.css";
import Header from "../components/header/header.js";
import Home from "./home/home.js";

export default function Homy() {
  return (
    <div>
      <Home />
    </div>
  );
}
