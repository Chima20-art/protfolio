import styles from '../home/home.module.css';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';

export default function JobCard(props) {
  return (
    <Grid
      sx={{
        height: { md: '100px', xs: '88px' },
        width: { md: '300px', xs: '300px' },
      }}
      container
      direction="row"
      boxShadow="3"
      borderRadius="5px"
      padding="5px"
      marginLeft={props.marginL}
      alignSelf={props.Justify}
      right={props.Right}
      margin={props.Margin}
      backgroundColor={props.background_color}
      color={props.textColor}
      className={styles.pointer}
    >
      <Grid
        sx={{ margin: { xs: '2px', md: '17px' } }}
        item
        container
        direction="column"
        justifyContent="center"
        md={1}
        width="fit-content"
      >
        <CheckCircleIcon sx={{ fontSize: { md: 'large', xs: 'large' } }} />
      </Grid>

      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        textAlign="flex-start"
        md={8}
        xs={9}
      >
        <Typography className={styles.cardsTitle}> {props.title}</Typography>
        <Typography className={styles.cardsParagraph}>
          {' '}
          {props.description}{' '}
        </Typography>
      </Grid>
      <Grid
        item
        margin="auto"
        direction="row"
        justifyContent="center"
        width="fit-content"
        md={1}
      >
        <ArrowForwardIosIcon />
      </Grid>
    </Grid>
  );
}
