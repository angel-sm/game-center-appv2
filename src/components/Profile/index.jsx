import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './Profile-styles';

import('./Profile.scss');

const Profile = ({ title }) => (
  <div className='Profile-content'>
    <Avatar
      alt='Remy Sharp'
      src='/static/images/avatar/1.jpg'
      className={useStyles().root}
    />
    <div className='Profile-info'>
      <Typography className={useStyles().subTitle} color='textSecondary'>
        {title || 'Ocupation'}
      </Typography>
      <Typography className={useStyles().title} color='textSecondary' gutterBottom>
        {title || 'User name'}
      </Typography>
    </div>
  </div>
);

export default Profile;
