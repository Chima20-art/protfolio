import Grid from "@mui/material/Grid";
import Image from "next/image";
import Divider from "@mui/material/Divider";

import styles from "./about.module.css";

export default function About() {
  return (
    <Grid>
      <Grid container direction="row" md={12}>
        <Grid container md={6}>
          <Grid
            item
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="fit-content"
          >
            <Image
              src="/Chaimae (6).png"
              alt="sofa"
              width={1000}
              height={600}
            />
          </Grid>
        </Grid>
        <Grid item container direction="row" md={6}>
          <Grid container direction="row" item md={1}>
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
              animations and creating intuitive, dynamic user experiences. Let's
              make something special.{" "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
