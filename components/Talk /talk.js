import { Grid } from "@mui/material";
import Image from "next/dist/client/image";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapGreenButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
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
    <Grid contain item md={12} backgroundColor="red" direction={"column"}>
      <Grid item>Let's talk !</Grid>
      <Grid
        item
        container
        direction={"row"}
        md={6}
        justifyContent="center"
        textAlign={"center"}
      >
        <Grid
          item
          container
          direction={"column"}
          backgroundColor="green"
          justifyContent={"center"}
          md={2}
        >
          <Grid item backgroundColor="yellow">
            {" "}
            Phone me :
          </Grid>
          <Grid item> +380983571966</Grid>
        </Grid>
        <Grid item container direction={"column"} md={2}>
          <Grid item backgroundColor="yellow">
            {" "}
            Mail me:
          </Grid>
          <Grid item> michichchaimae@gmail.com</Grid>
        </Grid>
        <Grid item container direction={"column"} md={2}>
          <Grid item backgroundColor="yellow">
            {" "}
            follow me
          </Grid>
          <Grid item>linkedin/chaïmae-michich </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BootstrapGreenButton>Hire me</BootstrapGreenButton>
      </Grid>
    </Grid>
  );
}
