/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Create, Search, CreditCard, AttachMoney, Settings, Assessment, Face, Home } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Profile from '../../components/Layout/Profile';
import { useStyles, ProfileControllerContent, BannerFont } from './Layout.styles';
import Tournaments from '../../components/Layout/Tournaments';
import { logout } from '../../actions/auth';
import Seasons from '../../components/Layout/Seasons';

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
          url='https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg'
        />
      </ProfileControllerContent>
      <Tournaments />
      <Divider />
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
        {props.children}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  logout,
};

export default connect(mapStateToProps, dispatchStateToProps)(Layout);
