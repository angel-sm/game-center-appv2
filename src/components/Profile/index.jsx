import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import useStayles from './Profile-styles';

import('./Profile.scss');

const Profile = ({ title }) => (
  <div className='Profile-content'>
    <Avatar
      alt='Remy Sharp'
      src='/static/images/avatar/1.jpg'
      className={useStayles().root}
    />
    <div className='Profile-info'>
      <Typography className={useStayles().subTitle} color='textSecondary'>
        {title || 'Ocupation'}
      </Typography>
      <Typography className={useStayles().title} color='textSecondary' gutterBottom>
        {title || 'User name'}
      </Typography>
    </div>
  </div>
);

export default Profile;
