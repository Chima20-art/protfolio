import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './projects.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/dist/client/image';
import { useState } from 'react';
import { Button, Typography, Modal } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';

export default function Projects(props) {
  const projects = [
    {
      title: 'Nordic rose',
      stack: 'Next/JS',
      category: 'Management of an online blog',
      githubURl: ' https://chaimae-blog.vercel.app ',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/Nordic-rose.png',
      screenShots: [
        { original: '/Nordic-rose.png' },
        { original: '/Nordic-rose.png' },
        { original: '/Nordic-rose.png' },
      ],
    },
    {
      title: 'Pomodoro',
      stack: 'React/JS',
      category: 'Online timer',
      githubURl: 'https://pomodoro-chima20-art.vercel.app',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/pomodoro.png',
      screenShots: [
        { original: '/pomodoro.png' },
        { original: '/pomodoro.png' },
        { original: '/pomodoro.png' },
      ],
    },
    {
      title: 'landing Page',
      stack: 'React/JS',
      category: 'Landing page website',
      githubURl: 'https://github.com/Chima20-art/landing-page',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/landing-page.png',
      screenShots: [
        { original: '/landing-page.png' },
        { original: '/landing-page.png' },
        { original: '/landing-page.png' },
      ],
    },
    {
      title: 'DSI user interface',
      stack: 'React/JS',
      category: 'DSI website',
      githubURl: 'https://community-chima20-art.vercel.app/client',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/DSI.png',
      screenShots: [
        { original: '/DSI.png' },
        { original: '/DSI.png' },
        { original: '/DSI.png' },
      ],
    },
    {
      title: 'Etch a Sketch',
      stack: 'JS',
      category: 'etch a sketch game',
      githubURl: 'https://etch-a-sketch-kohl.vercel.app',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/etch-a-sketch.png',
      screenShots: [
        { original: '/etch-a-sketch.png' },
        { original: '/etch-a-sketch.png' },
        { original: '/etch-a-sketch.png' },
      ],
    },
    {
      title: 'Student Forum',
      stack: 'Next/JS',
      category: 'University students ideas forum innovation ',
      githubURl: 'https://student-forum.vercel.app',
      description:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
      mainImg: '/studentforum1.png',
      screenShots: [
        { original: '/studentforum1.png' },
        { original: '/studentforum1.png' },
        { original: '/studentforum1.png' },
      ],
    },
  ];
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
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
    marginTop: '20%',
    left: '50%',
    top: '15%',
    transform: 'translate(-50%, -50%)',
    width: '47vw',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };

  const reactArr = ['/landing-page.png', '/DSI.png', '/map.png'];
  const nextArr = ['/Nordic-rose.png', '/protfolio.png'];
  const [state, setState] = useState('all');
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
    console.log('open', open);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reactProjects = projects.filter(checkReact);
  function checkReact(project) {
    return project.stack == 'React/JS';
  }
  console.log(' react projects are: ', reactProjects);
  const nextProjects = projects.filter(checkNext);
  function checkNext(project) {
    return project.stack == 'Next/JS';
  }
  console.log(' next projects are: ', nextProjects);

  return (
    <Grid
      item
      container
      direction="column "
      height="92vh"
      id={props.ID}
      justifyContent="center"
    >
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} container direction="column">
          <Grid
            container
            item
            sx={{
              position: 'relative',
              width: '100%',
              height: '50%',
            }}
          >
            <ImageGallery
              items={data?.screenShots}
              showPlayButton={false}
              showThumbnails="false"
              showFullscreenButton={false}
            />
          </Grid>
          <Box sx={{ padding: '45px 95px 25px 25px' }}>
            <Typography item sx={{ fontSize: '22pt', lineHeight: '30pt' }}>
              {data?.title}
            </Typography>
            <Typography
              item
              id="modal-modal-description"
              sx={{
                fontSize: '11pt',
                color: ' #c0c0c0',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                paddingBottom: '15px',
                borderBottom: 'solid 1px #c0c0c0 ',
              }}
            >
              {data.category}
            </Typography>
            <Typography
              sx={{
                fontSize: '11pt',
                padding: '15px 0px',
                lineHeight: '18pt',
                color: '#444',
                marginBottom: '15px',
              }}
            >
              {data.description}
            </Typography>
            <Link href={data?.githubURl} passHref>
              <Typography
                sx={{
                  width: 'fit-content',
                  bottom: '0px',
                  padding: '10px',
                  border: ' 3px solid #E31B6D',
                  color: 'white',
                  backgroundColor: '#E31B6D',
                  borderRadius: '0px',
                  '&:hover': {
                    border: ' 3px solid #E31B6D',
                    boxShadow: 'none',
                    backgroundColor: '#E31B6D',
                    color: 'white',
                  },
                  margin: 'auto',
                }}
              >
                view website
              </Typography>
            </Link>
          </Box>
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
              onClick={() => {
                setState('all');
              }}
            />
            <Tab
              label="React-js"
              className={styles.subTitle}
              onClick={() => setState('React/JS')}
            />
            <Tab
              label="Next-js"
              className={styles.subTitle}
              onClick={() => setState('Next/JS')}
            />

            {console.log(state)}
          </Tabs>
        </Grid>
        <Grid
          item
          container
          md={10}
          margin="auto"
          z-index="-1"
          justifyContent="center"
        >
          {projects
            .filter((item) => {
              if (state == 'all') return true;

              return state == item.stack;
            })
            .map((project) => (
              <Grid
                key={project.title}
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
                    onClick={() => {
                      handleOpen();
                      setData(project);
                    }}
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
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
