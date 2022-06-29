import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './projects.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/dist/client/image';
import { useState } from 'react';
import { Button, Typography, Modal } from '@mui/material';

export default function Projects(props) {
  const projects = [
    {
      title: 'Nordic rose',
      stack: 'Nextjs/Sanity',
      category: 'Management of an online blog',
      githubURl: 'https://github.com/Chima20-art/blog-Next',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/Nordic-rose.png',
      screenShots: [],
    },
    {
      title: 'Pomodoro',
      stack: 'React/JS',
      category: 'Online timer',
      githubURl: 'https://github.com/Chima20-art/pomodoro',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/Nordic-rose.png',
      screenShots: [],
    },
  ];

  const AllImgArr = [
    '/Nordic-rose.png',
    '/pomodoro.png',
    '/landing-page.png',
    '/etch-a-sketch.png',
    '/DSI.png',
    '/map.png',
  ];
  const style = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '47vw',
    height: '100vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };

  const reactArr = ['/landing-page.png', '/DSI.png', '/map.png'];
  const nextArr = ['/Nordic-rose.png', '/protfolio.png'];
  const [state, setState] = useState('all');
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
    console.log('open', open);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      item
      container
      direction="column "
      height="92vh"
      id={props.ID}
      justifyContent="flex-end"
    >
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} container direction="column">
          <Grid
            container
            item
            sx={{ width: '100%', height: '60%', backgroundColor: 'red' }}
          >
            <Image
              src="/Nordic-rose.png"
              layout="fill"
              alt="nordic rose"
              objectFit="contain"
            />
          </Grid>

          <Typography item backgroundColor="blue" marginTop={'250px'}>
            Nordic Rose
          </Typography>

          <Typography item id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleClose}>Close Modal</Button>
        </Box>
      </Modal>
      <Grid item container backgroundColor="white">
        <Grid
          item
          container
          md={10}
          padding="20px"
          margin="auto"
          justifyContent={'center'}
          alignContent={'flex-end'}
          className={styles.title}
        >
          {' '}
          Projects{' '}
        </Grid>

        <Grid
          item
          container
          md={10}
          margin="auto"
          justifyContent={'space-around'}
          padding="20px"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="black"
            indicatorColor="secondary"
            centered
            className={styles.subTitle}
          >
            <Tab
              label="All"
              className={styles.subTitle}
              onClick={() => setState('all')}
            />
            <Tab
              label="React-js"
              className={styles.subTitle}
              onClick={() => setState('react')}
            />
            <Tab
              label="Next-js"
              className={styles.subTitle}
              onClick={() => setState('next')}
            />
            <Tab
              label="Javascript"
              className={styles.subTitle}
              onClick={() => setState('javascript')}
            />
            {console.log(state)}
          </Tabs>
        </Grid>
        <Grid item container md={10} margin="auto" z-index="-1">
          {state == 'all' || state == 'javascript'
            ? projects.map((project) => (
                <Grid
                  key={project}
                  container
                  item
                  md={4}
                  className={styles.card}
                >
                  <Grid className={styles.cardContent}>
                    <Typography sx={{ color: 'black', fontSize: '30px' }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: '#E31B6D', fontSize: '20px' }}>
                      {project.stack}
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={handleOpen}
                      sx={{
                        bottom: '0px',
                        border: ' 3px solid #E31B6D',
                        color: 'black',
                        borderRadius: '0px',
                        '&:hover': {
                          border: ' 3px solid #E31B6D',
                          boxShadow: 'none',
                          backgroundColor: '#E31B6D',
                          color: 'white',
                        },

                        width: '200px',
                        margin: 'auto',
                      }}
                    >
                      Learn more
                    </Button>
                  </Grid>
                  <Image
                    className={styles.cardImage}
                    src={project.mainImg}
                    width="400px"
                    height="300px"
                    alt="rose"
                  />
                </Grid>
              ))
            : state == 'react'
            ? reactArr.map((image) => (
                <Grid key={image} item md={4}>
                  <Image src={image} width="400px" height="300px" alt="rose" />
                </Grid>
              ))
            : nextArr.map((image) => (
                <Grid key={image} item md={4}>
                  <Image src={image} width="400px" height="300px" alt="rose" />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
