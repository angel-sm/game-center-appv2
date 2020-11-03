/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const TypeSearch = (props) => {
  const { handleChange, value } = props;

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Buscar por</FormLabel>
      <RadioGroup aria-label='gender' name='gender1' value={value} onChange={handleChange}>
        <FormControlLabel value='name' control={<Radio />} label='Nombre' />
        <FormControlLabel value='nickname' control={<Radio />} label='Nickname' />
        <FormControlLabel value='email' control={<Radio />} label='Email' />
      </RadioGroup>
    </FormControl>
  );
};

