import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useCardStyles from './CardInfo-styles';

const CardInfo = ({ title, data }) => {
  return (
    <Card className={useCardStyles().root}>
      <CardContent>
        <Typography className={useCardStyles().title} color='textSecondary' gutterBottom>
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

