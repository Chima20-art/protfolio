import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./projects.module.css";

export default function Projects() {
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
      <Grid item container md={7} margin="auto" justifyContent={"space-around"}>
        <Grid className={styles.subTitle}>All</Grid>
        <Grid className={styles.subTitle}>React-js</Grid>
        <Grid className={styles.subTitle}>Nextjs</Grid>
        <Grid className={styles.subTitle}>Javascript</Grid>
      </Grid>
    </Grid>
  );
}
