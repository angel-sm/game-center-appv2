import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Profile = () => (
  <Card className={useCardStyles().root}>
    <CardContent>
      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      <Typography variant='h5' component='h2'>
        {data || 'Cargando...'}
      </Typography>
    </CardContent>
  </Card>
);

export default Profile;
