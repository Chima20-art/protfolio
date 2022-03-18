import { autocompleteClasses, Grid } from "@mui/material";
import Image from "next/dist/client/image";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./talk.module.css";
import Header from "../components/header/header";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

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
  backgroundColor: "#E0B3BA",
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
    backgroundColor: "#E0B3BA",
    boxShadow: "none",
  },
  "&:active": {
    borderColor: "#283543",
    boxShadow: "none",
  },
});

export default function Talk() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    console.log("Sending");
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <Grid
      contain
      item
      height="100vh"
      direction="column"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Grid
        item
        container
        height="100vh"
        justifyContent={"center"}
        alignItems="center"
        display={"flex"}
        direction={"column"}
        backgroundColor="black"
      >
        <Grid item color={"white"} fontWeight="600" fontSize={"20px"}>
          {" "}
          Have a question or want to work together ?{" "}
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <form method="POST" className={styles.form}>
            <input
              className={styles.normalHolder}
              id="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              className={styles.normalHolder}
              id="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              className={styles.bigHolder}
              id="message"
              placeholder="Your message "
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <button
              type="submit"
              className={styles.submitButton}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              SUBMIT
            </button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

/* <Grid item container height={"50vh"} backgroundColor="yellow">
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
  <Grid
    item
    container
    justifyContent={"center"}
    className={styles.informationTitle}
  >
    <Grid item justifyContent={"center"} margin="0px 15px">
      <LocalPhoneIcon />
    </Grid>
    <Grid
      item
      display="flex"
      justifyContent={"center"}
      direction="column"
    >
      Phone me :
    </Grid>
  </Grid>
  <Grid item className={styles.information}>
    {" "}
    +380983571966
  </Grid>
</Grid>

<Grid item container direction={"column"} md={2}>
  <Grid
    item
    container
    justifyContent={"center"}
    className={styles.informationTitle}
  >
    <Grid item justifyContent={"center"} margin="0px 15px">
      <EmailIcon />
    </Grid>
    <Grid
      item
      display="flex"
      justifyContent={"center"}
      direction="column"
    >
      Mail me:
    </Grid>
  </Grid>
  <Grid item className={styles.information}>
    {" "}
    michichchaimae@gmail.com
  </Grid>
</Grid>
<Grid item container direction={"column"} md={2}>
  <Grid
    item
    container
    justifyContent={"center"}
    className={styles.informationTitle}
  >
    <Grid item justifyContent={"center"} margin="0px 15px">
      <LinkedInIcon />
    </Grid>
    <Grid
      item
      display="flex"
      justifyContent={"center"}
      direction="column"
    >
      follow me
    </Grid>
  </Grid>
  <Grid item className={styles.information}>
    {" "}
    linkedin/chaïmae-michich
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
  Hire me
</BootstrapGreenButton>
</Grid>
</Grid>*/
