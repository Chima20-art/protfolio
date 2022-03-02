import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./projects.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Image from "next/dist/client/image";
import { useState } from "react";
import Header from "../components/header/header";

export default function Projects(props) {
  const AllImgArr = [
    "/Nordic-rose.png",
    "/pomodoro.png",
    "/landing-page.png",
    "/etch-a-sketch.png",
    "/DSI.png",
    "/map.png",
  ];

  const reactArr = ["/landing-page.png", "/DSI.png", "/map.png"];
  const nextArr = ["/Nordic-rose.png", "/protfolio.png"];
  const [state, setState] = useState("all");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      item
      container
      direction="row "
      alignContent="space-between"
      height="100vh"
    >
      <Grid item container b>
        <Header item />
      </Grid>

      <Grid item container>
        <Grid
          item
          container
          md={10}
          padding="20px"
          margin="auto"
          justifyContent={"center"}
          alignContent={"flex-end"}
          className={styles.title}
        >
          {" "}
          Projects{" "}
        </Grid>

        <Grid
          item
          container
          md={10}
          margin="auto"
          justifyContent={"space-around"}
          padding="20px"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="black"
            indicatorColor="secondary"
            centered
            className={styles.subTitle}
          >
            <Tab
              label="All"
              className={styles.subTitle}
              onClick={() => setState("all")}
            />
            <Tab
              label="React-js"
              className={styles.subTitle}
              onClick={() => setState("react")}
            />
            <Tab
              label="Next-js"
              className={styles.subTitle}
              onClick={() => setState("next")}
            />
            <Tab
              label="Javascript"
              className={styles.subTitle}
              onClick={() => setState("javascript")}
            />
            {console.log(state)}
          </Tabs>
        </Grid>
        <Grid item container md={10} margin="auto">
          {state == "all" || state == "javascript"
            ? AllImgArr.map((image) => (
                <Grid key="hh" item md={4}>
                  <Image src={image} width="400px" height="300px" alt="rose" />
                </Grid>
              ))
            : state == "react"
            ? reactArr.map((image) => (
                <Grid key="hh" item md={4}>
                  <Image src={image} width="400px" height="300px" alt="rose" />
                </Grid>
              ))
            : nextArr.map((image) => (
                <Grid key="hh" item md={4}>
                  <Image src={image} width="400px" height="300px" alt="rose" />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
