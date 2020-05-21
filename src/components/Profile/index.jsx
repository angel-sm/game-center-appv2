import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Container, useStyles } from './Profile.styles';

const Profile = ({ url, userName }) => {
  const classes = useStyles();

  return (
    <Container>
      <Avatar alt={userName} src={url} className={classes.root} />
      <Typography variant='h6' component='h6'>
        {userName}
      </Typography>
    </Container>
  );
};

export default Profile;
