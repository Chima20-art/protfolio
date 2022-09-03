import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Divider from '@mui/material/Divider'
import styles from './about.module.css'
import Header from '../components/header/header'
import JobCard from '../components/JobCard/JobCard'
import { Typography } from '@mui/material'

export default function About(props) {
    return (
        <Grid
            container
            id={props.ID}
            sx={{
                width: '100vw',
                height: { md: '100vh', xs: 'fit-content' },
                paddingTop: '80px',
            }}
            justifyContent={'flex-end'}
        >
            <Grid
                sx={{
                    height: { md: 'fit-content', xs: 'fit-content' },
                }}
                item
                container
                display={'flex'}
                direction="column"
            >
                <Grid
                    item
                    container
                    display={'flex'}
                    direction="row"
                    justifyContent={'center'}
                    alignItems="flex-end"
                    textAlign={'center'}
                    className={styles.mainTitle}
                    marginBottom="20px"
                >
                    Services
                </Grid>

                <Grid
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        height: 'fit-content',
                    }}
                    justifyContent={'center'}
                    item
                    container
                >
                    <Grid
                        sx={{
                            display: { xs: 'none', md: 'flex' },

                            height: '50vh',
                            margin: 'auto 0px',
                        }}
                        md="4"
                        item
                        container
                        justifyContent="space-between"
                        alignItems={'center'}
                        direction="column"
                    >
                        <Grid item alignSelf={'flex-start'}>
                            <JobCard
                                title="Javascript developer"
                                description="Creative websites for you."
                            />
                        </Grid>
                        <Grid item>
                            <JobCard
                                title="UI/UX Designer"
                                description="Creative websites for you"
                            />
                        </Grid>
                        <Grid item alignSelf={'flex-end'}>
                            <JobCard
                                title="Freelancer"
                                description="Hire me now."
                                background_color="black"
                                textColor="white"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{
                            padding: { xs: '20px', md: '100px' },

                            display: 'flex',
                            flexDirection: 'row',
                        }}
                        md="5"
                        item
                        container
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            md="1"
                            sx={{
                                flex: 1,
                                display: { xs: 'none', md: 'none' },
                                backgroundColor: 'yellow',
                            }}
                        >
                            <div className={styles.vertical}>About me</div>
                        </Divider>

                        <Grid
                            sx={{
                                flex: 5,
                                width: 'fit-content',

                                width: { xs: '100vw', md: 'fit-content' },
                                padding: '20px',
                            }}
                            item
                            container
                            direction="column"
                            margin="20px"
                        >
                            <Grid
                                item
                                sx={{
                                    fontSize: { md: '36px', xs: '26px' },
                                    fontWeight: { md: '530', xs: '530' },
                                    fontFamily: 'M PLUS Code Latin, sans-serif',
                                }}
                                margin="auto"
                                marginLeft="0px"
                                marginBottom="10px"
                            >
                                Need creative Website ?
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    fontSize: { md: '34px', xs: '25px' },
                                    fontWeight: { md: '530', xs: '530' },
                                    fontFamily: 'M PLUS Code Latin, sans-serif',
                                }}
                                margin="auto"
                                marginLeft="0px"
                                marginTop="0px"
                                marginBottom={'30px'}
                            >
                                I can help you{' '}
                            </Grid>
                            <Grid
                                item
                                className={styles.paragraph}
                                sx={{
                                    width: {
                                        xs: '90vw',
                                        md: '500px',
                                    },
                                }}
                                margin="auto"
                                marginLeft="0px"
                            >
                                As a web developer, I enjoy using my obsessive
                                attention to detail, my unequivocal love for
                                making things, and my mission-driven work ethic
                                to literally change the world. I am passionate
                                about building excellent software that improves
                                the lives of those around me.  I have serious
                                passion for UI effects, animations and creating
                                intuitive, dynamic user experiences. Lets make
                                something special.{' '}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
