/* eslint-disable react/destructuring-assignment */
import React, { Suspense } from 'react';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Menu } from './Menu';
import Profile from './Profile';
import { useStyles, ProfileControllerContent, BannerFont, ContentContainer } from './styles';

const Layout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <ProfileControllerContent>
        <Profile
          url='https://res.cloudinary.com/saponestore/image/upload/v1605900628/game-center/undraw_male_avatar_323b_xjg3qi.svg'
        />
      </ProfileControllerContent>
      <Divider />
      <Menu />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.aling}>
            <BannerFont>GAME CENTER</BannerFont>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentContainer>
          <Suspense fallback={<CircularProgress />}>
            {props.children}
          </Suspense>
        </ContentContainer>
      </main>
    </div>
  );
};

export default Layout;
