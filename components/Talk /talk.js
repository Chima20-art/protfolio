import { Grid } from "@mui/material";
import Image from "next/dist/client/image";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./talk.module.css";

const BootstrapGreenButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  width: "150px",
  height: "45px",
  padding: "15px 15px",
  border: "1px solid",
  borderColor: "rgb(174, 180, 180)",
  lineHeight: 1.5,
  backgroundColor: "#FFDD04",
  color: "white",

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "283543",
    backgroundColor: "#FFDD04",
    boxShadow: "none",
  },
  "&:active": {
    borderColor: "#283543",
    boxShadow: "none",
  },
});

export default function Talk() {
  return (
    <Grid
      contain
      item
      md={12}
      backgroundColor="black"
      direction={"column"}
      padding="100px"
      marginTop="100px"
    >
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        item
        className={styles.title}
        padding="30px"
      >
        Let s talk !
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        md={6}
        justifyContent="center"
        textAlign={"center"}
        marginTop="30px"
        marginBottom="80px"
      >
        <Grid
          item
          container
          direction={"column"}
          justifyContent={"center"}
          md={2}
        >
          <Grid item className={styles.informationTitle}>
            {" "}
            Phone me :
          </Grid>
          <Grid item className={styles.information}>
            {" "}
            +380983571966
          </Grid>
        </Grid>
        <Grid item container direction={"column"} md={2}>
          <Grid item className={styles.informationTitle}>
            {" "}
            Mail me:
          </Grid>
          <Grid item className={styles.information}>
            {" "}
            michichchaimae@gmail.com
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          md={2}
          className={styles.information}
        >
          <Grid item className={styles.informationTitle}>
            {" "}
            follow me
          </Grid>
          <Grid item className={styles.information}>
            linkedin/chaïmae-michich{" "}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent={"center"}>
        <BootstrapGreenButton className={styles.informationTitle}>
          Hire me{" "}
        </BootstrapGreenButton>
      </Grid>
    </Grid>
  );
}
