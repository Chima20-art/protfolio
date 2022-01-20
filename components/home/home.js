import styles from "./home.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import JobCard from "../JobCard/JobCard";

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
export default function Home() {
  return (
    <Grid container direction="column" height="100vh" md={12}>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        item
        className={styles.title}
        margin="auto"
        width={"50vw"}
        height={"20vh"}
      >
        Hello! Im&nbsp;
        <span className={styles.highlight}> Chaimae Michich.</span>
        Im a front-end web developer.
      </Grid>
      <Grid item container direction="row" justifyContent="center">
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
    </Grid>
  );
}
