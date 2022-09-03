import Image from 'next/image'
import * as React from 'react'
import styles from './header.module.css'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from 'next/dist/client/link'
import { useState } from 'react'

import Divider from '@mui/material/Divider'

const useStyles = makeStyles((theme) => ({
    header: { backgroundColor: 'red' },
}))

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    padding: '3px 3px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: 'none',
    width: '100px',
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
        backgroundColor: '#E0D2D4',
        borderColor: '#E0C3C7',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
    },
})

export default function Header(props) {
    const [isSelected, setIsSelected] = useState('')
    const classes = useStyles()
    const [spacing, setSpacing] = React.useState(2)
    const [activeButton, setActiveButton] = useState('')

    const handleChange = (event) => {
        setSpacing(Number(event.target.value))
    }
    const handleSelected = (a) => {
        setIsSelected(a)
    }

    return (
        <Grid md={12} className={props.Class}>
            <Grid container direction="row" height={'9vh'}>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignContent={'center'}
                    md={2}
                >
                    <Image
                        item
                        src="/Michich-2.png"
                        width={250}
                        height={80}
                        alt="My logo"
                        className={styles.img}
                    />
                </Grid>

                <Grid
                    container
                    item
                    md={8}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Link href={'/'} replace v>
                        <Grid>
                            <BootstrapButton
                                size="small"
                                variant="text"
                                className={
                                    isSelected == 'home'
                                        ? styles.selectedPageButton
                                        : styles.pageButton
                                }
                            >
                                Home
                            </BootstrapButton>
                        </Grid>
                    </Link>
                    <Link href={'#about'} replace passHref>
                        <Grid>
                            <BootstrapButton
                                size="small"
                                variant="text"
                                className={
                                    isSelected == 'services'
                                        ? styles.selectedPageButton
                                        : styles.pageButton
                                }
                            >
                                Services
                            </BootstrapButton>
                        </Grid>
                    </Link>
                    <Link href={'#skills'} replace passHref>
                        <BootstrapButton
                            size="small"
                            variant="text"
                            className={
                                isSelected == 'skills'
                                    ? styles.selectedPageButton
                                    : styles.pageButton
                            }
                        >
                            Skills
                        </BootstrapButton>
                    </Link>{' '}
                    <BootstrapButton
                        size="small"
                        variant="text"
                        className={
                            isSelected == 'projects'
                                ? styles.selectedPageButton
                                : styles.pageButton
                        }
                    >
                        <Link href={'#projects'}>
                            <a>Projects</a>
                        </Link>
                    </BootstrapButton>
                    <BootstrapButton
                        size="small"
                        variant="text"
                        className={
                            isSelected == 'contact'
                                ? styles.selectedPageButton
                                : styles.pageButton
                        }
                    >
                        <Link href="#talk">
                            <a> Contacts</a>
                        </Link>
                    </BootstrapButton>
                </Grid>
                <Link href="/talk" passHref>
                    <Grid
                        container
                        item
                        md={2}
                        justifyContent="center"
                        alignItems="center"
                        className={styles.blue}
                    ></Grid>
                </Link>
            </Grid>
        </Grid>
    )
}
