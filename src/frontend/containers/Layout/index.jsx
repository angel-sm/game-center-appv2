/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  Create,
  Search,
  CreditCard,
  AttachMoney,
  Settings,
  Assessment,
  Face,
  Home,
} from '@material-ui/icons';

import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Profile from '../../components/Layout/Profile';
import { useStyles, ProfileControllerContent, BannerFont, ContentContainer } from './styles';
import { logout } from '../../actions/auth';
import Seasons from '../../components/Layout/Seasons';
import { getTournamentsRequest } from '../../actions/tournaments';

const options = [
  {
    option: 'Inicio',
    url: '/',
    icon: <Home />,
  }, {
    option: 'Nuevo torneo',
    url: '/registertournament',
    icon: <Create />,
  }, {
    option: 'Buscar torneo',
    url: '/search-tournaments',
    icon: <Search />,
  }, {
    option: 'Credito',
    url: '/credit',
    icon: <CreditCard />,
  }, {
    option: 'Jugadores',
    url: '/players',
    icon: <Face />,
  }, {
    option: 'Puntos tienda',
    url: '/store-points',
    icon: <AttachMoney />,
  }, {
    option: 'Config pt',
    url: '/config-points',
    icon: <Settings />,
  }, {
    option: 'Reportes',
    url: '/reports',
    icon: <Assessment />,
  },
];

const Layout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    props.getTournamentsRequest(props.center, 'tournaments');
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const hanldeCloseSesion = (event) => {
    event.preventDefault();
    document.cookie = 'USER=';
    document.cookie = 'USERM=';
    document.cookie = 'PENDINGSTEP=';
    document.cookie = 'CENTERID=';
    document.cookie = 'TOKEN=';
    document.cookie = 'PENDINGID=';
    props.logout({});
    window.location.href = '/';
  };

  const drawer = (
    <div>
      <ProfileControllerContent>
        <Profile
          url='https://res.cloudinary.com/saponestore/image/upload/v1605900628/game-center/undraw_male_avatar_323b_xjg3qi.svg'
        />
      </ProfileControllerContent>
      <Seasons />
      <Divider />
      <List>
        {options.map((option) => (
          <Link
            to={option.url}
            style={{ textDecoration: 'none', color: '#4e4e4e' }}
            key={option.url}
          >
            <ListItem button key={option.option}>
              <ListItemText primary={option.option} />
              <ListItemIcon>{option.icon}</ListItemIcon>
            </ListItem>
          </Link>
        ))}
        <ListItem button>
          <ListItemText primary='Cerrar sesion' onClick={hanldeCloseSesion} />
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
        </ListItem>
      </List>
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
          {props.children}
        </ContentContainer>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getTournamentsRequest,
  logout,
};

export default connect(mapStateToProps, dispatchStateToProps)(Layout);
