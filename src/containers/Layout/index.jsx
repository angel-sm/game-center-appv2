import React from 'react';
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
import { Create, Search, CreditCard, AttachMoney, Settings, Assessment, Face } from '@material-ui/icons';

import Profile from '../../components/Layout/Profile';
import TournamentsMenu from '../../components/Layout/DropTournamentsMenu';
import SeasonsMenu from '../../components/Layout/DropSeasonsMenu';

import { tournaments, seasons } from '../../utils/mokups';

import useStyles from './Layout-styles';

const options = [
  {
    option: 'Nuevo torneo',
    url: '/new-tournament',
    icon: <Create />,
  }, {
    option: 'Buscar torneo',
    url: '/search',
    icon: <Search />,
  }, {
    option: 'Credito',
    url: '/credit',
    icon: <CreditCard />,
  }, {
    option: 'Jugadores',
    url: '/player',
    icon: <Face />,
  }, {
    option: 'Puntos tienda',
    url: '/store-points',
    icon: <AttachMoney />,
  }, {
    option: 'Config pt',
    url: '/store-points-config',
    icon: <Settings />,
  }, {
    option: 'Reportes',
    url: '/reports',
    icon: <Assessment />,
  },
];

function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <Profile />
        <Divider />
        <TournamentsMenu section='Torneos' data={tournaments} />
        <Divider />
        <SeasonsMenu section='Temporadas' data={seasons} />
        <Divider />
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
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' color='secondary' className={classes.appBar}>
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
          <Typography variant='h6'>
            Game Center
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
        {children}
      </main>
    </div>
  );
};

export default Layout;
