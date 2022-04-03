import styles from "./home.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";
import { useState } from "react";
import { color } from "@mui/system";
import About from "../about";
import Skills from "../skills";
import Projects from "../projects";
import Talk from "../talk";
import { motion } from "framer-motion";
import Header from "../../components/header/header";

const BootstrapGreenButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 15px",
  border: "1px solid",
  borderColor: "rgb(174, 180, 180)",
  lineHeight: 1.5,

  color: "black",
  height: "60px",
  width: "150px",

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "283543",

    boxShadow: "none",
  },
  "&:active": {
    borderColor: "#283543",
    boxShadow: "none",
  },
});

const BootstrapBlackButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 15px",
  border: "1px solid",
  borderColor: "rgb(174, 180, 180)",
  lineHeight: 1.5,
  backgroundColor: "#333232",
  color: "white",
  height: "60px",
  width: "150px",

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "283543",
    backgroundColor: "#333232",

    boxShadow: "none",
  },
  "&:active": {
    borderColor: "#283543",
    boxShadow: "none",
  },
});

/*const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
}); */

export default function Home() {
  const [clicked, setClicked] = useState("notclicked");

  return (
    <Grid
      container
      direction="column"
      md={12}
      justifyContent={"center"}
      className={styles.parent}
    >
      <Grid
        height="100vh"
        width="100vw"
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems="center"
        item
        className={styles.title1}
        margin="auto"
        textAlign={"center"}
      >
        <motion.Grid
          item
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems="center"
          color="white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Grid item color="white">
            Hello, Im&nbsp;
            <span className={styles.highlight}> Chaimae Michich.</span>
          </Grid>
          <Grid item color="white">
            Im a web developer.
          </Grid>
          <Grid item color="white">
            Welcome to my world 👋.
          </Grid>

          <Link href="#about" passHref>
            <Grid
              item
              container
              height="52px"
              border="solid 4px white"
              justifyContent={"center"}
              textAlign={"center"}
              alignContent={"center"}
              padding="30px"
              margin="auto"
              width={"fit-content"}
              cursor={"pointer"}
              marginTop={"70px"}
              className={styles.RalewayFont}
              onClick={() => setClicked("clicked")}
              color="white"
            >
              <Grid item color="white">
                View My Work &nbsp;{" "}
              </Grid>

              <ArrowForwardIcon
                color="#ffff"
                item
                className={clicked === "clicked" ? styles.remove : styles.leave}
              />
              <ArrowDownwardIcon
                item
                className={clicked === "clicked" ? styles.leave : styles.remove}
              />
            </Grid>
          </Link>
        </motion.Grid>
      </Grid>
    </Grid>
  );
}
