import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  children: {
    width: '50%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
  },
}));

export default useStyles;
