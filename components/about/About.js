import Grid from "@mui/material/Grid";
import Image from "next/image";
export default function About() {
  return (
    <Grid container direction="row" md={12}>
      <Grid item md={6}>
        <Image src="/Chaimae (6).png" alt="sofa" width={1400} height={800} />
      </Grid>
      <Grid item md={6}>
        <Grid></Grid>
      </Grid>
    </Grid>
  );
}
