import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    color: '#3f51b5',
    title: 'Nuevo torneo',
    width: '30%',
    url: '/registertournament',
  }, {
    color: '#3f51b5',
    title: 'Buscar torneo',
    width: '30%',
    url: '/search-tournaments',
  }, {
    color: '#3f51b5',
    title: 'Credito',
    width: '30%',
    url: '/credit',
  }, {
    color: '#3f51b5',
    title: 'Jugadores',
    width: '30%',
    url: '/players',
  }, {
    color: '#3f51b5',
    title: 'Puntos tienda',
    width: '30%',
    url: '/store-points',
  }, {
    color: '#3f51b5',
    title: 'Config pt',
    width: '30%',
    url: '/store-points-config',
  }, {
    color: '#3f51b5',
    title: 'Reportes',
    width: '30%',
    url: '/reports',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    margin: '.5em',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.2,
      },
      '& $imageMarked': {
        opacity: 1,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    opacity: 0,
    height: 3,
    width: 15,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          href={image.url}
        >
          <span
            className={classes.imageSrc}
            style={{
              background: `${image.color}`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component='span'
              variant='subtitle1'
              color='inherit'
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
