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
    <Grid container direction="row" height="100vh">
      <Grid
        container
        justifyContent="center"
        margin="auto"
        className={styles.contai}
        md={12}
      >
        <Grid
          container
          item
          direction="column"
          margin={"auto"}
          textAlign="start"
          justifyContent="center"
          width="600px"
          height="600px"
          md={6}
        >
          <Grid
            container
            justifyContent={"center"}
            item
            md={2}
            className={styles.title}
          >
            Hello! Im Chaimae Michich .
          </Grid>
          <Grid
            container
            item
            md={2}
            marginTop="0px"
            className={styles.subTitle}
            justifyContent="center"
          >
            {" "}
            I am a Javascript developer.
          </Grid>

          <Grid item container md={2} direction="row" justifyContent={"center"}>
            <BootstrapGreenButton>Downald CV</BootstrapGreenButton>
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
    </Grid>
  );
}
