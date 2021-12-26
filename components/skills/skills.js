import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "./skills.module.css";
import Image from "next/image";
import { Box } from "@mui/system";
import { shadows } from "@mui/system";
import { grey } from "@mui/material/colors";

export default function Skills() {
  return (
    <Grid
      container
      md={12}
      direction="row"
      marginTop="50px"
      marginBottom="50px"
    >
      <Grid
        item
        container
        direction="row"
        md={6}
        paddingLeft="100px"
        paddingRight="100px"
        backgroundColor="yellow"
        marginBottom="50px"
      >
        <Grid container direction="row" item md={1}>
          <Divider orientation="vertical" flexItem>
            <div className={styles.vertical}>My Skills</div>
          </Divider>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md={11}
          height="fit-content"
          paddingTop="20px"
        >
          <Grid item md={1} width="400px" className={styles.title}>
            What my design skills included?
          </Grid>

          <Grid
            item
            md={4}
            className={styles.paragraph}
            width="400px"
            margin="auto"
            marginLeft="0px"
            paddingTop="20px"
            paddingBottom="20px"
          >
            As a web developer, I enjoy using my obsessive attention to detail,
            my unequivocal love for making things, and my mission-driven work
            ethic to literally change the world.
          </Grid>
          <Grid container item direction="column" md={6}>
            <Grid container item direction="column" width="400px" md={2}>
              <Grid
                item
                container
                paddingTop="10px"
                paddingBottom="20px"
                width="400px"
                direction="row"
                justifyContent="space-between"
              >
                <div>photohop</div>
                <div>80%</div>
              </Grid>
              <Grid
                item
                container
                width="400px"
                height="3px"
                backgroundColor="gray"
                marginBottom="20px"
              >
                <Grid item width="350px" height="3px" backgroundColor="red" />
              </Grid>
            </Grid>
            <Grid container item direction="column" md={2} width="400px">
              <Grid container item direction="column">
                <Grid
                  item
                  container
                  paddingTop="10px"
                  paddingBottom="20px"
                  width="400px"
                  direction="row"
                  justifyContent="space-between"
                >
                  <div>photohop</div>
                  <div>80%</div>
                </Grid>
                <Grid
                  item
                  container
                  width="400px"
                  height="3px"
                  backgroundColor="gray"
                  marginBottom="20px"
                >
                  <Grid
                    item
                    width="350px"
                    height="3px"
                    backgroundColor="red"
                    marginBottom="100px"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item direction="column" md={2} width="400px">
              <Grid container item direction="column">
                <Grid
                  item
                  container
                  paddingTop="10px"
                  paddingBottom="20px"
                  width="400px"
                  direction="row"
                  justifyContent="space-between"
                >
                  <div>photohop</div>
                  <div>80%</div>
                </Grid>
                <Grid
                  item
                  container
                  width="400px"
                  height="3px"
                  backgroundColor="gray"
                  marginBottom="20px"
                >
                  <Grid item width="350px" height="3px" backgroundColor="red" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        md={6}
        item
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        marginBottom="50px"
      >
        <Grid
          md={4}
          container
          item
          direction="column"
          margin="20px"
          backgroundColor="white"
          height="200px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          borderRadius={"10px"}
          justifyContent="space-around"
          alignContent="center"
        >
          <Image
            src="/imgbin-computer-icons-clock-time-stop-watches-NjjrXdw1DS0XYacF0zqPiCu5S.jpg"
            width="70px"
            height="70px"
            objectFit="contain"
            alt="logo"
            backgroundColor="red"
          />
          <Grid item container>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              className={styles.title}
            >
              Fast
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              className={styles.paragraph}
            >
              Fast load times and lag free interaction, my highest priority.
            </Grid>
          </Grid>
        </Grid>
        <Grid
          md={4}
          container
          item
          direction="column"
          margin="20px"
          backgroundColor="white"
          height="200px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          borderRadius={"10px"}
          justifyContent="space-around"
          alignContent="center"
        >
          <Image
            src="/images.png"
            width="70px"
            height="70px"
            objectFit="contain"
            alt="logo"
            backgroundColor="red"
          />
          <Grid item container>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              className={styles.title}
            >
              Fast
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              className={styles.paragraph}
            >
              Fast load times and lag free interaction, my highest priority.
            </Grid>
          </Grid>
        </Grid>

        <Grid
          md={4}
          container
          item
          direction="column"
          margin="20px"
          backgroundColor="white"
          height="200px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          borderRadius={"10px"}
          justifyContent="space-around"
          alignContent="center"
        >
          <Image
            src="/270-2706458_responsive-web-icon-responsive-web-design.png"
            width="70px"
            height="70px"
            objectFit="contain"
            alt="logo"
            backgroundColor="red"
          />
          <Grid item container>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              className={styles.title}
            >
              Fast
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              className={styles.paragraph}
            >
              Fast load times and lag free interaction, my highest priority.
            </Grid>
          </Grid>
        </Grid>

        <Grid
          md={4}
          container
          item
          direction="column"
          margin="20px"
          backgroundColor="white"
          height="200px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          borderRadius={"10px"}
          justifyContent="space-around"
          alignContent="center"
        >
          <Image
            src="/download.png"
            width="70px"
            height="70px"
            objectFit="contain"
            alt="logo"
            backgroundColor="red"
          />
          <Grid item container>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              className={styles.title}
            >
              Fast
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              className={styles.paragraph}
            >
              Fast load times and lag free interaction, my highest priority.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
