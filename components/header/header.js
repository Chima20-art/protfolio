import Image from "next/image";
import * as React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  header: {},
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "3px 3px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "none",

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
    borderColor: "#283543",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
});

export default function Header() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  return (
    <Box
      md={{
        boxShadow: 3,
        bgcolor: "background.paper",
        m: 1,
        p: 1,
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        color: "text.secondary",
        "& svg": {
          m: 1.5,
        },
        "& hr": {
          mx: 0.5,
        },
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        className={classes.header}
      >
        <Grid item container spacing={0} md={8}>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            md={3}
          >
            <Image
              item
              src="/Michich (5).png"
              width={200}
              height={70}
              alt="My logo"
              className={styles.img}
            />
          </Grid>

          <Grid
            container
            item
            md={8}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Home
            </BootstrapButton>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Services
            </BootstrapButton>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              About
            </BootstrapButton>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Projects
            </BootstrapButton>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Skills
            </BootstrapButton>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Contacts
            </BootstrapButton>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Pages
            </BootstrapButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          md={4}
          margin-right="0px"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Grid
            container
            item
            md={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            className={styles.back}
            margin="auto"
          >
            <Image
              src="/instagram (1).png"
              width={20}
              height={20}
              alt="instagram"
              className={styles.mediaVectors}
            />
            <Image
              src="/facebook (1).png"
              width={18}
              height={18}
              alt="facebook"
              className={styles.mediaVectors}
            />
            <Image
              src="/linkedin-logo.png"
              width={16}
              height={16}
              alt="linkedIn"
              className={styles.mediaVectors}
            />
          </Grid>

          <Grid
            container
            item
            md={6}
            justifyContent="center"
            alignItems="center"
            className={styles.blue}
          >
            <Button variant="outlined" className={styles.contactMeButton}>
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Divider />
    </Box>
  );
}
