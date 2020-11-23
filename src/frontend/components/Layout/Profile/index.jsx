import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Container, useStyles } from './styles';

const Profile = ({ url, userName, center, credit }) => {
  const classes = useStyles();

  return (
    <Container>
      <Avatar alt={userName} src={url} className={classes.root} />
      <Typography variant='h6' component='h6'>
        {userName || 'usuario'}
      </Typography>
      <Typography variant='subtitle1' component='span'>
        {`Centro: ${center || 'center'}`}
      </Typography>
    </Container>
  );
};

export default Profile;
