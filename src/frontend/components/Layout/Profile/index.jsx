import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Container, useStyles } from './Profile.styles';

const Profile = ({ url, userName, center, credit }) => {
  const classes = useStyles();

  return (
    <Container>
      <Avatar alt={userName} src={url} className={classes.root} />
      <Typography variant='h6' component='h6'>
        {userName || 'name'}
      </Typography>
      <Typography variant='subtitle1' component='span'>
        {`Centro: ${center || 'center'}`}
      </Typography>
      <Typography variant='body2' component='span'>
        {`Credito: ${credit || '0'}`}
      </Typography>
    </Container>
  );
};

export default Profile;
