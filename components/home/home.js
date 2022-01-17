import styles from "./home.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import About from "../about/About";
import JobCard from "../JobCard/JobCard";
import Skills from "../Skills/skills";
import Projects from "../projects/projects/projects";
import Talk from "../Talk /talk";

const BootstrapGreenButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 15px",
  border: "1px solid",
  borderColor: "rgb(174, 180, 180)",
  lineHeight: 1.5,
  backgroundColor: "#FFDD04",
  color: "white",

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
    backgroundColor: "#FFDD04",
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
export default function Home() {
  return (
    <Grid container direction="row" height="100vh">
      <Grid
        container
        direction="column"
        justifyContent="center"
        className={styles.contai}
        md={12}
      >
        <Grid
          container
          direction="column"
          textAlign="start"
          justifyContent="center"
          width="fit-content"
          className={styles.content}
          md={7}
          spacing={4}
        >
          <Grid item md={2} spacing={0} className={styles.title}>
            Hi! Im Chaimae Michich -
          </Grid>
          <Grid item md={2} spacing={0} className={styles.subTitle}>
            {" "}
            JAVASCRIPT DEVELOPER
          </Grid>
          <Grid item md={2} width="580px" className={styles.paragraph}>
            {" "}
            Product Designer and Digital Creative Director working in Design
            field for 13 years so far, specialized in UI/UX,Branding and Digital
            designs.
          </Grid>
          <Grid item container direction="row" md={2} spacing={2}>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-around"
              md={6}
            >
              <Grid item md={3} className={styles.sTitle}>
                Email:
              </Grid>
              <Grid item md={3} className={styles.paragraph}>
                michichchaimae@gmail.com
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-around"
              md={6}
            >
              <Grid item md={3} className={styles.sTitle}>
                Github:
              </Grid>
              <Grid item md={3} className={styles.paragraph}>
                /Chima20.art
              </Grid>
            </Grid>
          </Grid>
          <Grid item container md={2} direction="row">
            <Grid item md={6}>
              <BootstrapGreenButton>Downald CV</BootstrapGreenButton>
            </Grid>
            <Grid item md={6}>
              <BootstrapBlackButton>Downald CV</BootstrapBlackButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <JobCard
          title="Javascript developer"
          description="Creative websites for you."
          MarginTop="40px"
        />
        <JobCard
          title="UI/UX Designer"
          description="Creative websites for you"
          MarginTop="20px"
        />
        <JobCard title="Freelancer" description="Hire me now." />
      </Grid>
      <About />
      <Skills />
      <Projects />
      <Talk />
    </Grid>
  );
}
