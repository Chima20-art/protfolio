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
    <Grid container direction="column" md={12} justifyContent={"center"}>
      <Grid
        height="100vh"
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems="center"
        item
        className={styles.title}
        margin="auto"
        width={"60vw"}
        textAlign={"center"}
      >
        <Grid
          item
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Grid item>
            Hello, Im&nbsp;
            <span className={styles.highlight}> Chaimae Michich.</span>
          </Grid>
          <Grid item>Im a front-end web developer.</Grid>

          <Link href="#about" passHref>
            <Grid
              item
              container
              height="52px"
              backgroundColor="white"
              border="solid 4px"
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
            >
              <Grid item>View My Work &nbsp; </Grid>

              <ArrowForwardIcon
                item
                className={clicked === "clicked" ? styles.remove : styles.leave}
              />
              <ArrowDownwardIcon
                item
                className={clicked === "clicked" ? styles.leave : styles.remove}
              />
            </Grid>
          </Link>
        </Grid>
      </Grid>
      <About ID="about" />
      <Skills ID="skills" />
      <Projects ID="projects" />
      <Talk ID="talk" />
    </Grid>
  );
}
