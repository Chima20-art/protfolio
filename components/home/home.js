import styles from './home.module.css'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Link from 'next/link'
import { useState } from 'react'
import { color } from '@mui/system'
import About from '../../pages/about'
import Skills from '../../pages/skills'
import Projects from '../../pages/projects'
import Talk from '../../pages/talk'
import { motion } from 'framer-motion'
import Header from '../header/header'
import { Typography } from '@mui/material'

const BootstrapGreenButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '15px 15px',
    border: '1px solid',
    borderColor: 'rgb(174, 180, 180)',
    lineHeight: 1.5,

    color: 'black',
    height: '60px',
    width: '150px',

    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '283543',

        boxShadow: 'none',
    },
    '&:active': {
        borderColor: '#283543',
        boxShadow: 'none',
    },
})

const BootstrapBlackButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '15px 15px',
    border: '1px solid',
    borderColor: 'rgb(174, 180, 180)',
    lineHeight: 1.5,
    backgroundColor: '#333232',
    color: 'white',
    height: '60px',
    width: '150px',

    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '283543',
        backgroundColor: '#333232',

        boxShadow: 'none',
    },
    '&:active': {
        borderColor: '#283543',
        boxShadow: 'none',
    },
})

/*const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
}); */

export default function Home({ setCurrentPage }) {
    return (
        <Grid
            container
            direction="column"
            md={12}
            justifyContent={'center'}
            className={styles.parent}
        >
            <Grid
                container
                direction={'column'}
                justifyContent={'center'}
                alignItems="center"
                item
                className={styles.title1}
                margin="auto"
                textAlign={'center'}
            >
                <motion.Grid
                    item
                    container
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems="center"
                    color="white"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                            },
                        },
                    }}
                >
                    <Grid item sx={{ maxWidth: '70%', margin: 'auto' }}>
                        <Typography
                            sx={{
                                color: 'white',

                                fontSize: { xs: '21px', md: '32px' },
                                lineHeight: '60px',
                                letterSpacing: 3,
                                fontWeight: 'bold',
                            }}
                        >
                            {' '}
                            Hi! I'm&nbsp;{' '}
                            <span style={{ color: '#AA9CF5' }}>
                                Chaimae Michich
                            </span>{' '}
                        </Typography>
                        <Typography
                            sx={{
                                letterSpacing: 3,
                                color: '#BFBECB',
                                textAlign: 'center',
                                fontSize: { xs: '18px', md: '16px' },
                            }}
                        >
                            I'm a Full Stack JavaScript developer, and I like
                            making applications of different varieties. I help
                            founders add value to society by crafting software
                            using JavaScript tools.
                            <br /> Welcome to my world 👋.
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        container
                        sx={{
                            borderColor: '#BFBECB',
                            height: '10px',
                            padding: '23px',
                            border: {
                                xs: 'solid 2px #AA9CF5',
                                md: 'solid 2px #AA9CF5',
                            },
                            '&:hover': {
                                background: '#AA9CF5',
                            },
                        }}
                        justifyContent={'center'}
                        textAlign={'center'}
                        alignContent={'center'}
                        margin="auto"
                        width={'fit-content'}
                        cursor={'pointer'}
                        marginTop={'20px'}
                        className={styles.RalewayFont}
                        onClick={() => setCurrentPage(1)}
                    >
                        <Typography
                            item
                            color="#AA9CF5"
                            sx={{
                                fontSize: { xs: '12px', md: '14px' },
                                fontWeight: 500,
                                '&:hover': {
                                    color: '#fff',
                                },
                            }}
                        >
                            View My Work &nbsp;{' '}
                        </Typography>
                        <ArrowForwardIcon
                            item
                            className={styles.forward}
                            sx={{
                                color: '#AA9CF5',
                                fontSize: { xs: '14px', md: '18px' },
                                textAlign: 'center',
                            }}
                        />
                        <ArrowDownwardIcon
                            item
                            className={styles.downward}
                            sx={{
                                color: '#AA9CF5',
                                fontSize: { xs: '14px', md: '18px' },
                            }}
                        />
                    </Grid>
                </motion.Grid>
            </Grid>
        </Grid>
    )
}
