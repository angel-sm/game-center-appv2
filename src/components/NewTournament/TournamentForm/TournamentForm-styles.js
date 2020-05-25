import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textField: {
    margin: '.5em',
  },
  children: {
    width: '100%',
  },
}));

export default useStyles;
