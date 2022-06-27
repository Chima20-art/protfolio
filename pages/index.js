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
import ReactPageScroller from '@yunoek/react-page-scroller';
import { useState } from "react";



export default function Homy() {
  const[currentPage, setCurrentPage] = useState(0);
  const [hideHeader,setHideHeader] = useState(true)

  const onBeforePageScroll = (number)=>{
    if(number == 0){
      setHideHeader(true)
    }else{
      setHideHeader(false)
    }
    setCurrentPage(number)
    console.log('number ',number)
  }

  const pageOnChange = (number)=>{
    //console.log('got ',number)
    //setCurrentPage(number)
    //console.log('current page is ',number)
  }

  return (
    <div>
     
     {!hideHeader && <Header Class={styles.header}  /> }
     
      <ReactPageScroller renderAllPagesOnFirstRender={true} pageOnChange={pageOnChange} onBeforePageScroll={onBeforePageScroll} customPageNumber={currentPage} >
      <Home />
      <About ID="about" />
      <Skills ID="skills" />
      <Projects ID="projects" />
      <Talk ID="talk" />
      </ReactPageScroller>
      
    </div>
  );
}
