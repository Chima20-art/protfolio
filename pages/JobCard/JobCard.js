import styles from "../home/home.module.css";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function JobCard(props) {
  return (
    <Grid
      container
      direction="row"
      width="300px"
      height="100px"
      boxShadow="3"
      borderRadius="5px"
      padding="5px"
      marginLeft="30px"
      marginBottom="100px"
      marginTop={props.MarginTop}
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        md={1}
        width="fit-content"
        margin="17px"
      >
        <CheckCircleIcon fontSize="large" />
      </Grid>

      <Grid
        item
        container
        direction="column"
        margin="auto"
        justifyContent="center"
        textAlign="flex-start"
        md={8}
      >
        <div className={styles.cardsTitle}> {props.title}</div>
        <div className={styles.cardsParagraph}> {props.description} </div>
      </Grid>
      <Grid
        item
        margin="auto"
        direction="row"
        justifyContent="center"
        width="fit-content"
        md={1}
      >
        <ArrowForwardIosIcon />
      </Grid>
    </Grid>
  );
}
