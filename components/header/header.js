import Image from "next/image";
import * as React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "blue",
  },
}));

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
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      className={classes.header}
    >
      <Grid item container spacing={0} className={styles.back} md={7}>
        <Grid item direction="row" justifyContent="space-between" md={4}>
          <Image
            src="/Michich.png"
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
          spacing={0}
          className={styles.backgroundColor}
        >
          <Button size="small" variant="text" className={styles.pageButton}>
            Home
          </Button>
          <Button size="small" variant="text" className={styles.pageButton}>
            Services
          </Button>
          <Button size="small" variant="text" className={styles.pageButton}>
            About
          </Button>
          <Button size="small" variant="text" className={styles.pageButton}>
            Projects
          </Button>
          <Button size="small" variant="text" className={styles.pageButton}>
            Skills
          </Button>
          <Button size="small" variant="text" className={styles.pageButton}>
            Contacts
          </Button>
          <Button size="small" variant="text" className={styles.pageButton}>
            Pages
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        md={5}
        margin-right="0px"
        justifyContent="flex-end"
      >
        <Grid
          container
          item
          md={1.5}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          className={styles.back}
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
          md={3.5}
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
  );
}
