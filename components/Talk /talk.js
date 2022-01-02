import { Grid } from "@mui/material";
import Image from "next/dist/client/image";

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
    </Grid>
  );
}
