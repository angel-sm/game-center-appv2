/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: '1em auto',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  formChild: {
    margin: '.5em 0',
  },
});
