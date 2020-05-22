import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: '.5em',
  },
  subTitle: {
    fontSize: 10,
  },
  title: {
    fontSize: 14,
  },
}));

export default useStyles;
