import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    margin: '.5em',
  },
  title: {
    fontSize: 14,
  },
});

const CardInfo = ({ title, data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {title || 'Titulo'}
        </Typography>
        <Typography variant='h5' component='h2'>
          {data || 'Cargando...'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardInfo;

