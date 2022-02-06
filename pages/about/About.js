import Grid from "@mui/material/Grid";
import Image from "next/image";
import Divider from "@mui/material/Divider";

import styles from "./about.module.css";
import Header from "../../components/header/header";
import JobCard from "../JobCard/JobCard";

export default function About() {
  return (
    <Grid container direction="column" height="100vh">
      <Grid item container marginTop={"0px"}>
        <Header item />
      </Grid>

      <Grid item container direction="row" margin="auto">
        <Grid
          item
          container
          md={"6"}
          display="flex"
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          width={"fit-content"}
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
        <Grid container md={6}>
          <Grid item container direction="column">
            <JobCard
              title="Javascript developer"
              description="Creative websites for you."
              marginL="50px"
            />
            <JobCard
              title="UI/UX Designer"
              description="Creative websites for you"
              Margin="auto"
            />
            <JobCard
              backgroundColor="red"
              title="Freelancer"
              description="Hire me now."
              Right="0px"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
