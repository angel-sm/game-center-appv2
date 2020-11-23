/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1em 2em',
  },
}));

const options = ['Nombre', 'Nickname', 'Email'];
const optionValue = ['name', 'nickname', 'email'];

export const TypeSearch = (props) => {
  const classes = useStyles();
  const { handleChange, value } = props;

  return (
    <Select
      className={classes.spaceSides}
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    >
      {
        options.map((option, index) => <MenuItem key={option} value={optionValue[index]}>{option}</MenuItem>)
      }
    </Select>
  );
};

