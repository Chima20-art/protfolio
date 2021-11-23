import Image from "next/image";
import * as React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((them) => ({
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
      alignItems="center"
      spacing={3}
    >
      <Grid item md={2}>
        <Image
          src="/Michich.png"
          width={200}
          height={70}
          alt="My logo"
          className={styles.img}
        />
      </Grid>

      <Grid
        item
        md={6}
        direction="row"
        justifyContent="space-between"
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

      <Grid
        container
        item
        md={1}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
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
        item
        md={2}
        width="auto"
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={styles.back}
      >
        <Button variant="outlined" className={styles.contactMeButton}>
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
}
