import styles from "./home.module.css";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={styles.contai}
      md={12}
    >
      <Grid
        container
        direction="column"
        textAlign="start"
        justifyContent="center"
        width="fit-content"
        className={styles.content}
        md={7}
        width="600px"
      >
        <Grid item md={2} spacing={0} className={styles.title}>
          Hi! I'm Chaimae Michich -
        </Grid>
        <Grid item md={2} spacing={0} className={styles.subTitle}>
          {" "}
          JAVASCRIPT DEVELOPER
        </Grid>
        <Grid item md={2} width="580px" className={styles.paragraph}>
          {" "}
          Product Designer and Digital Creative Director working in Design field
          for 13 years so far, specialized in UI/UX,Branding and Digital
          designs.
        </Grid>
        <Grid item container direction="row" md={2} spacing={2}>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            md={6}
          >
            <Grid item md={3} className={styles.sTitle}>
              Email:
            </Grid>
            <Grid item md={3}>
              michichchaimae@gmail.com
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            md={6}
          >
            <Grid item md={3} className={styles.sTitle}>
              Github:
            </Grid>
            <Grid item md={3}>
              /Chima20.art
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={2}>
          {" "}
          Hi! I'm Chaimae Nimbus -
        </Grid>
      </Grid>
    </Grid>
  );
}
