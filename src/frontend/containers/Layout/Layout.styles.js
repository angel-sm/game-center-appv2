import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { ColorsPalette } from '../../assets/styles';

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
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: ColorsPalette.background_primary_fill,
    // eslint-disable-next-line no-dupe-keys
    background: ColorsPalette.background_primary,
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
}));

const ProfileControllerContent = styled.div`
  max-height: 40%;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

export { ProfileControllerContent, useStyles };
