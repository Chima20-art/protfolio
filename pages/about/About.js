import Grid from "@mui/material/Grid";
import Image from "next/image";
import Divider from "@mui/material/Divider";

import styles from "./about.module.css";
import Header from "../../components/header/header";
import JobCard from "../JobCard/JobCard";

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
        item
        container
        direction="row"
        margin="auto"
        justifyContent={"space-around"}
        height="50%"
      >
        <Grid
          item
          container
          width="fit-content"
          display="flex"
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            item
            container
            width="fit-content"
            margin="0px 50px"
            justifyContent={"center"}
            alignContent="center"
          >
            <Image src="/Chaimae (6).png" width="250px" height="450px" />
          </Grid>
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

      <Grid
        backgroundColor="blue"
        item
        container
        margin={"auto"}
        justifyContent="space-around"
        alignItems={"center"}
        direction="row"
      >
        <Grid item>
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
        <Grid item>
          <JobCard title="Freelancer" description="Hire me now." />
        </Grid>
      </Grid>
    </Grid>
  );
}
