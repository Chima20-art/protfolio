import Grid from "@mui/material/Grid";
import Image from "next/image";
import Divider from "@mui/material/Divider";

import styles from "./about.module.css";
import Header from "../components/header/header";
import JobCard from "./JobCard/JobCard";

export default function About() {
  return (
    <Grid
      container
      direction="column"
      height="100vh"
      justifyContent={"space-around"}
    >
      <Grid item container marginTop={"0px"}>
        <Header item />
      </Grid>

      <Grid
        maxWidth={"1400px"}
        justifyContent={"center"}
        item
        container
        direction="row"
        margin="auto"
        height="50%"
      >
        <Grid
          md="4"
          item
          container
          justifyContent="space-around"
          alignItems={"center"}
          direction="column"
        >
          <Grid item alignSelf={"flex-start"}>
            <JobCard
              title="Javascript developer"
              description="Creative websites for you."
            />
          </Grid>
          <Grid item>
            <JobCard
              title="UI/UX Designer"
              description="Creative websites for you"
            />
          </Grid>
          <Grid item alignSelf={"flex-end"}>
            <JobCard
              title="Freelancer"
              description="Hire me now."
              background_color="black"
              textColor="white"
            />
          </Grid>
        </Grid>
        <Grid
          md="5"
          item
          container
          width="fit-content"
          display="flex"
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className={styles.divider}
          >
            <div className={styles.vertical}>About me</div>
          </Divider>

          <Grid
            item
            container
            direction="column"
            width={"fit-content"}
            marginLeft={"0px"}
          >
            <Grid
              item
              className={styles.title}
              margin="auto"
              marginLeft="0px"
              marginBottom="10px"
            >
              Need creative Website ?
            </Grid>
            <Grid
              item
              className={styles.title}
              margin="auto"
              marginLeft="0px"
              marginTop="0px"
              marginBottom={"30px"}
            >
              I can help you{" "}
            </Grid>
            <Grid
              item
              className={styles.paragraph}
              width="500px"
              margin="auto"
              marginLeft="0px"
            >
              As a web developer, I enjoy using my obsessive attention to
              detail, my unequivocal love for making things, and my
              mission-driven work ethic to literally change the world. I am
              passionate about building excellent software that improves the
              lives of those around me.  I have serious passion for UI effects,
              animations and creating intuitive, dynamic user experiences. Lets
              make something special.{" "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
