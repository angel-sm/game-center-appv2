import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const tournament = {
  'id': '123456789123456789123445',
  'tournament': 'Lool',
  'cost': 233,
  'organizer': 'Cristian Merrydew',
  'credit': 641,
  'start': '2020-07-02',
  'end': '2020-01-29',
  'description': 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
};

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={(
          <Typography variant='h2' component='h2'>
            {tournament.tournament}
          </Typography>
        )}
        subheader={`${tournament.start} - ${tournament.end || 'No ha terminado'}`}
      />
      <CardContent>
        <Typography variant='h6' color='textSecondary' component='h6'>
          {`Costo: $ ${tournament.cost}`}
        </Typography>
        <Typography variant='h6' color='textSecondary' component='h6'>
          {`Por: ${tournament.organizer}`}
        </Typography>
        <Typography variant='body1' color='textSecondary' component='p'>
          {`${tournament.description}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
