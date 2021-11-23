import Image from "next/image";
import * as React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "red",
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
      className={styles.back}
    >
      <Grid item container spacing={0} className={styles.back} md={7}>
        <Grid
          item
          direction="row"
          justifyContent="space-between"
          md={4}
          backgroundColor="red"
        >
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
          <Button variant="text" className={styles.pageButton}>
            Home
          </Button>
          <Button variant="text" className={styles.pageButton}>
            Services
          </Button>
          <Button variant="text" className={styles.pageButton}>
            About
          </Button>
          <Button variant="text" className={styles.pageButton}>
            Projects
          </Button>
          <Button variant="text" className={styles.pageButton}>
            Skills
          </Button>
          <Button variant="text" className={styles.pageButton}>
            Contacts
          </Button>
          <Button variant="text" className={styles.pageButton}>
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
        backgroundColor="yellow"
      >
        <Grid
          container
          item
          md={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          className={styles.back}
        >
          <Image
            src="/instagram (1).png"
            width={30}
            height={30}
            alt="instagram"
            className={styles.mediaVectors}
          />
          <Image
            src="/facebook (1).png"
            width={25}
            height={25}
            alt="facebook"
            className={styles.mediaVectors}
          />
          <Image
            src="/linkedin-logo.png"
            width={22}
            height={22}
            alt="linkedIn"
            className={styles.mediaVectors}
          />
        </Grid>

        <Grid
          container
          item
          md={3}
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
