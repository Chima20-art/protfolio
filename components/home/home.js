import styles from "./home.module.css";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={styles.contai}
      backgroundColor="#ffff6f"
      md={12}
    >
      <Grid
        container
        direction="column"
        backgroundColor="#ffff6f"
        textAlign="start"
        justifyContent="center"
        width="fit-content"
        className={styles.content}
        md={7}
      >
        <Grid item md={2} spacing={0} className={styles.title}>
          Hi! I'm Chaimae Michich -
        </Grid>
        <Grid item md={2} spacing={0} className={styles.subTitle}>
          {" "}
          JAVASCRIPT DEVELOPER
        </Grid>
        <Grid item md={2}>
          {" "}
          Hi! I'm Chaimae Nimbus -
        </Grid>
        <Grid item md={2}>
          {" "}
          Hi! I'm Chaimae Nimbus -
        </Grid>
        <Grid item md={2}>
          {" "}
          Hi! I'm Chaimae Nimbus -
        </Grid>
        <Grid item md={2}>
          {" "}
          Hi! I'm Chaimae Nimbus -
        </Grid>
      </Grid>
    </Grid>
  );
}
