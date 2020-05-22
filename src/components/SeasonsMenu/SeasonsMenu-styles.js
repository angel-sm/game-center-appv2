import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 'none',
    border: 'none',
    boxShadow: 'none',
  },
}));

const useDetailsStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const useSpaceStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0.9),
    textAlign: 'center',
  },
}));

export {
  useStyles,
  useDetailsStyles,
  useSpaceStyles,
};
