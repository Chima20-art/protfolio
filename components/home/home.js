import styles from "./home.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BootstrapGreenButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 15px",
  border: "1px solid",
  borderColor: "rgb(174, 180, 180)",
  lineHeight: 1.5,
  backgroundColor: "#A171FD",
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
    backgroundColor: "#A171FD",
    boxShadow: "none",
  },
  "&:active": {
    borderColor: "#283543",
    boxShadow: "none",
  },
});

const BootstrapBlackButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 15px",
  border: "1px solid",
  borderColor: "rgb(174, 180, 180)",
  lineHeight: 1.5,
  backgroundColor: "#333232",
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
    backgroundColor: "#333232",

    boxShadow: "none",
  },
  "&:active": {
    borderColor: "#283543",
    boxShadow: "none",
  },
});
export default function Home() {
  return (
    <Grid container direction="row" height="100vh">
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
          spacing={4}
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
            Product Designer and Digital Creative Director working in Design
            field for 13 years so far, specialized in UI/UX,Branding and Digital
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
              <Grid item md={3} className={styles.paragraph}>
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
              <Grid item md={3} className={styles.paragraph}>
                /Chima20.art
              </Grid>
            </Grid>
          </Grid>

          <Grid item container md={2} direction="row">
            <Grid item md={6}>
              <BootstrapGreenButton>Downald CV</BootstrapGreenButton>
            </Grid>
            <Grid item md={6}>
              <BootstrapBlackButton>Downald CV</BootstrapBlackButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid
          container
          direction="row"
          width="300px"
          height="100px"
          boxShadow="3"
          borderRadius="5px"
          padding="5px"
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
            <div className={styles.cardsTitle}> UI/UX Designer</div>
            <div className={styles.cardsParagraph}>
              {" "}
              Creative websites for you{" "}
            </div>
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
        <Grid
          container
          direction="row"
          width="300px"
          height="100px"
          boxShadow="3"
          borderRadius="5px"
          padding="5px"
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
            <div className={styles.cardsTitle}> UI/UX Designer</div>
            <div className={styles.cardsParagraph}>
              {" "}
              Creative websites for you{" "}
            </div>
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
        <Grid
          container
          direction="row"
          width="300px"
          height="100px"
          boxShadow="3"
          borderRadius="5px"
          padding="5px"
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
            <div className={styles.cardsTitle}> UI/UX Designer</div>
            <div className={styles.cardsParagraph}>
              {" "}
              Creative websites for you{" "}
            </div>
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
      </Grid>
    </Grid>
  );
}
