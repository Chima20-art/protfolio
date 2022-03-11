import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "./skills.module.css";
import Image from "next/image";
import { Box } from "@mui/system";
import { shadows } from "@mui/system";
import { grey } from "@mui/material/colors";
import Header from "../components/header/header";

export default function Skills() {
  return (
    <Grid container height="100vh">
      <Grid item container>
        <Header item />
      </Grid>
      <Grid
        container
        md={11}
        direction="row"
        margin="auto"
        justifyContent={"center"}
        alignContent="center"
        height={"fit-content"}
      >
        <Grid item container direction="row" md={5} marginBottom="50px">
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
            <Grid item md={1} width="500px" className={styles.title}>
              What my design skills included?
            </Grid>

            <Grid
              item
              md={4}
              className={styles.paragraph}
              width="500px"
              margin="auto"
              marginLeft="0px"
              paddingTop="20px"
              paddingBottom="20px"
            >
              As a web developer, I enjoy using my obsessive attention to
              detail, my unequivocal love for making things, and my
              mission-driven work ethic to literally change the world.
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
                  <div>HTML</div>
                  <div>90%</div>
                </Grid>
                <Grid
                  item
                  container
                  width="400px"
                  height="4px"
                  backgroundColor="gray"
                  marginBottom="20px"
                >
                  <Grid
                    item
                    width="360px"
                    height="5px"
                    backgroundColor="#E07485"
                  />
                </Grid>
              </Grid>
              <Grid container item direction="column" md={2} width="500px">
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
                    <div>CSS</div>
                    <div>90%</div>
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
                      width="360px"
                      height="5px"
                      backgroundColor="#E07485"
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
                    <div>React</div>
                    <div>80%</div>
                  </Grid>
                  <Grid
                    item
                    container
                    width="400px"
                    height="4px"
                    backgroundColor="gray"
                    marginBottom="20px"
                  >
                    <Grid
                      item
                      width="330px"
                      height="5px"
                      backgroundColor="#E07485"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item direction="column" md={2} width="500px">
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
                    <div>Nextjs</div>
                    <div>80%</div>
                  </Grid>
                  <Grid
                    item
                    container
                    width="400px"
                    height="4px"
                    backgroundColor="gray"
                    marginBottom="20px"
                  >
                    <Grid
                      item
                      width="340px"
                      height="5px"
                      backgroundColor="#E07485"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          md={5}
          item
          container
          width="min-width"
          alignItems="center"
          justifyContent="flex-start"
          marginBottom="50px"
        >
          <Grid
            md={5}
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
              md={6}
              src="/imgbin-computer-icons-clock-time-stop-watches-NjjrXdw1DS0XYacF0zqPiCu5S-removebg-preview.png"
              width="60px"
              height="70px"
              objectFit="contain"
              alt="logo"
            />
            <Grid item container md={6}>
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
                className={styles.paragraphCard}
              >
                Fast load times and lag free interaction, my highest priority.
              </Grid>
            </Grid>
          </Grid>
          <Grid
            md={5}
            container
            item
            direction="column"
            margin="20px"
            backgroundColor="white"
            height="200px"
            marginTop={"50px"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            borderRadius={"10px"}
            justifyContent="space-around"
            alignContent="center"
          >
            <Image
              md={6}
              src="/images__1_-removebg-preview.png"
              height="80px"
              width="70px"
              objectFit="contain"
              alt="logo"
            />
            <Grid item container md={6}>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                className={styles.title}
              >
                Intuitive
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                className={styles.paragraphCard}
              >
                Strong preference for easy to use, intuitive UX/UI.{" "}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            md={5}
            container
            item
            direction="column"
            marginLeft="20px"
            marginRight="20px"
            backgroundColor="white"
            height="200px"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            borderRadius={"10px"}
            justifyContent="space-around"
            alignContent="center"
          >
            <Image
              md={6}
              src="/270-2706458_responsive-web-icon-responsive-web-design-removebg-preview.png"
              width="120px"
              height="100px"
              objectFit="contain"
              marginTop="0px"
              alt="logo"
              backgroundColor="red"
            />
            <Grid item container md={6}>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                className={styles.title}
              >
                Responsive
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                className={styles.paragraphCard}
              >
                My layouts will work on any device, big or small.
              </Grid>
            </Grid>
          </Grid>

          <Grid
            md={5}
            container
            item
            direction="column"
            marginLeft="20px"
            marginRight="20px"
            height="200px"
            marginTop={"50px"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            borderRadius={"10px"}
            padding="30px"
            justifyContent="center"
            alignContent="center"
            backgroundColor="#212121"
          >
            <Grid
              md={6}
              item
              container
              direction="row"
              justifyContent="center"
              className={styles.title}
              color={"white"}
            >
              Dynamic
            </Grid>
            <Grid
              item
              md={6}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              className={styles.paragraphCardDynamic}
            >
              Websites dont have to be static, I love making pages come to life.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
