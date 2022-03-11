import Image from "next/image";
import * as React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "next/dist/client/link";
import { useState } from "react";

import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  header: { backgroundColor: "red" },
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  padding: "3px 3px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "none",
  width: "100px",
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
    backgroundColor: "#E0D2D4",
    borderColor: "#E0C3C7",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
});

export default function Header() {
  const [clicked, setClicked] = useState("false");
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  return (
    <Grid md={12}>
      <Grid container direction="row" height={"9vh"}>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignContent={"center"}
          md={2}
        >
          <Image
            item
            src="/Michich.png"
            width={250}
            height={80}
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
        >
          <Link href={"/"}>
            <Grid onClick={() => setClicked(!clicked)}>
              <BootstrapButton
                size="small"
                variant="text"
                className={
                  clicked == clicked
                    ? styles.pageButton
                    : styles.selectedPageButton
                }
              >
                Home
              </BootstrapButton>
            </Grid>
          </Link>
          <Link href={"/about"}>
            <Grid onClick={() => setClicked(!clicked)}>
              <BootstrapButton
                size="small"
                variant="text"
                className={
                  clicked == clicked
                    ? styles.pageButton
                    : styles.selectedPageButton
                }
              >
                Services
              </BootstrapButton>
            </Grid>
          </Link>
          <Link href={"/skills"}>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Skills
            </BootstrapButton>
          </Link>{" "}
          <Link href={"/projects"}>
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Projects
            </BootstrapButton>
          </Link>
          <Link href="/talk">
            <BootstrapButton
              size="small"
              variant="text"
              className={styles.pageButton}
            >
              Contacts
            </BootstrapButton>
          </Link>
        </Grid>
        <Link href="/talk" passHref>
          <Grid
            container
            item
            md={2}
            justifyContent="center"
            alignItems="center"
            className={styles.blue}
          >
            <Button variant="outlined" className={styles.contactMeButton}>
              Contact Me
            </Button>
          </Grid>
        </Link>
      </Grid>

      <Divider />
    </Grid>
  );
}
