import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./projects.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item container direction="row">
      <Grid
        item
        container
        md={10}
        padding="20px"
        margin="auto"
        justifyContent={"center"}
        alignContent={"center"}
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
          <Tab label="All" className={styles.subTitle} />
          <Tab label="React-js" className={styles.subTitle} />
          <Tab label="Next-js" className={styles.subTitle} />
          <Tab label="Javascript" className={styles.subTitle} />
        </Tabs>
      </Grid>
      <Grid item container md={10} backgroundColor="red" margin="auto">
        dhrf
      </Grid>
    </Grid>
  );
}
