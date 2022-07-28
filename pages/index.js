import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/home/home.module.css';
import Header from '../components/header/appBar';
import Home from '../components/home/home';
import { motion } from 'framer-motion';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Talk from './talk';
import ReactPageScroller from '@yunoek/react-page-scroller';
import { useState } from 'react';
import { Box } from '@mui/system';
import { NoEncryption } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Homy(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hideHeader, setHideHeader] = useState(true);
  const [clicked, setClicked] = useState(false);

  const onBeforePageScroll = (number) => {
    if (number == 0) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
    setCurrentPage(number);
    console.log('number ', number);
  };

  const pageOnChange = (number) => {
    //console.log('got ',number)
    //setCurrentPage(number)
    //console.log('current page is ',number)
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
  if (isMobile) {
    return (
      <div>
        {!hideHeader && <Header Class={styles.header} />}
        <Box>
          <ReactPageScroller
            renderAllPagesOnFirstRender={true}
            pageOnChange={pageOnChange}
            onBeforePageScroll={onBeforePageScroll}
            customPageNumber={currentPage}
          >
            <Home
              clicked={clicked}
              setClicked={setClicked}
              setCurrentPage={setCurrentPage}
            />
            <About ID="about" />
            <Skills ID="skills" />
            <Projects ID="projects" />
            <Talk ID="talk" />
          </ReactPageScroller>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Grid direction="column" width="100vw" height="fit-content">
          <Home clicked={clicked} />
          <About ID="about" />
          <Skills ID="skills" />
          <Projects ID="projects" />
          <Talk ID="talk" />
        </Grid>
      </div>
    );
  }
}
