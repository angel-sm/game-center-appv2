/* eslint-disable import/prefer-default-export */
import {
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const ColorButton = withStyles((theme) => ({
  root: {
    margin: '1em',
    color: '#fff',
    backgroundColor: '#00c853',
    '&:hover': {
      backgroundColor: '#00e676',
    },
  },
}))(Button);
