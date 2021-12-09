import Grid from "@mui/material/Grid";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import styles from "./about.module.css";

export default function About() {
  return (
    <Box>
      <Grid container direction="row" md={12}>
        <Grid item container md={6} width="fit-content" backgroundColor="red">
          <Image
            className={styles.img}
            src="/Chaimae (6).png"
            alt="sofa"
            width={1400}
            height={800}
          />
        </Grid>
        <Grid item container direction="row" md={6}>
          <Grid container direction="row" item md={1} backgroundColor="green">
            <Divider orientation="vertical" variant="middle" flexItem>
              <div className={styles.vertical}>About me</div>
            </Divider>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={11}
            backgroundColor="yellow"
            spacing={1}
          >
            <Grid item md={1} className={styles.title}>
              Need creative Website ?
            </Grid>
            <Grid item md={1} className={styles.title}>
              I can help you{" "}
            </Grid>
            <Grid item md={6} className={styles.paragraph}>
              As a web developer, I enjoy using my obsessive attention to
              detail, my unequivocal love for making things, and my
              mission-driven work ethic to literally change the world. I am
              passionate about building excellent software that improves the
              lives of those around me.  I have serious passion for UI effects,
              animations and creating intuitive, dynamic user experiences. Let's
              make something special.{" "}
            </Grid>
            <Grid item md={1}>
              You Can Follow Me also Here:
            </Grid>
            <Grid item container direction="row" md={3}>
              <Grid item container md={4} direction="row">
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
