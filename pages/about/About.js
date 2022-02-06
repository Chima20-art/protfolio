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
        <Header item className={styles.header} />
      </Grid>

      <Grid item container direction="row" margin="auto">
        <Grid
          item
          container
          direction="row"
          md={6}
          backgroundColor="red"
          justify="center"
          padding="0px auto"
        >
          <Grid item container direction="row" md={1}>
            <Divider orientation="vertical" variant="middle" flexItem>
              <div className={styles.vertical}>About me</div>
            </Divider>
          </Grid>
          <Grid item container direction="column" md={11} spacing={1}>
            <Grid
              item
              md={1}
              className={styles.title}
              margin="auto"
              marginLeft="0px"
              marginBottom="0px"
            >
              Need creative Website ?
            </Grid>
            <Grid
              item
              md={1}
              className={styles.title}
              margin="auto"
              marginLeft="0px"
              marginTop="0px"
            >
              I can help you{" "}
            </Grid>
            <Grid
              item
              md={6}
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
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignContent={"center"}
          >
            <JobCard
              title="Javascript developer"
              description="Creative websites for you."
              MarginLeft="0px !important"
            />
            <JobCard
              title="UI/UX Designer"
              description="Creative websites for you"
              margin="auto"
            />
            <JobCard
              backgroundColor="red"
              title="Freelancer"
              description="Hire me now."
              marginRight="0px"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
