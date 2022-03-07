import { autocompleteClasses, Grid } from "@mui/material";
import Image from "next/dist/client/image";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./talk.module.css";
import Header from "../components/header/header";

/* dgs*/

const BootstrapGreenButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  width: "150px",
  height: "45px",
  margin: "auto",
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
      height="100vh"
      direction="column"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Grid item container>
        <Header item />
      </Grid>
      <Grid
        item
        container
        backgroundColor="black"
        height="91vh"
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid item container height={"50vh"}>
          <Grid
            container
            direction="column"
            justifyContent={"center"}
            display="flex"
            textAlign={"center"}
            item
            className={styles.title}
            padding="5px"
          >
            Let s talk !
          </Grid>
          <Grid
            item
            container
            direction={"row"}
            justifyContent="center"
            textAlign={"center"}
            marginTop="30px"
            marginBottom="80px"
          >
            <Grid item container direction={"column"} md={2}>
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
          <Grid
            item
            container
            display={"flex"}
            direction="row"
            justifyContent="center"
          >
            <BootstrapGreenButton
              backgroundColor="green"
              className={styles.informationTitle}
            >
              Hire me{" "}
            </BootstrapGreenButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
