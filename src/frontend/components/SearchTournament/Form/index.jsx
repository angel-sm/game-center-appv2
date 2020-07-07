/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormControl, Button, TextField } from '@material-ui/core';
import { Competitors } from '../../../utils/mokups';

import useStyles from './Form.styles';

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form>
      <FormControl className={useStyles().children}>
        <Autocomplete
          id='combo-box-demo'
          className={useStyles().root}
          options={Competitors}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Juego'
              variant='outlined'
            />
          )}
        />
      </FormControl>
      <FormControl className={useStyles().children}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant='inline'
            inputVariant='outlined'
            label='Fecha de apertura'
            format='MM/dd/yyyy'
            value={selectedDate}
            InputAdornmentProps={{ position: 'end' }}
            onChange={(date) => handleDateChange(date)}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <FormControl className={useStyles().children}>
        <Button variant='contained' color='primary'>
          Buscar
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
