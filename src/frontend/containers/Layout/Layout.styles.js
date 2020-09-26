import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  aling: {
    flexGrow: 1,
    fontFamily: 'Press Start 2P',
  },
}));

const BannerFont = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: 1em;
`;

const ProfileControllerContent = styled.div`
  max-height: 40%;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

export { ProfileControllerContent, useStyles, BannerFont };
