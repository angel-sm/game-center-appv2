/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import useInputValueHandle from '../../../hooks/useInputHandler';

import useStyles from './styles';

const DataForm = () => {
  const classes = useStyles();
  const handleValue = useInputValueHandle({
    organizer: '',
    cost: '',
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log({ ...handleValue.form, startDate: moment(selectedDate).locale('e').format('YYYY-MM-DD') });
  };

  return (

    <form noValidate autoComplete='off' className={classes.root} onSubmit={handlerSubmit}>
      <FormControl variant='outlined' className={classes.chaild}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            name='start'
            variant='inline'
            format='dd/MM/yyyy'
            margin='normal'
            id='date-picker-inline'
            label='Date picker inline'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <FormControl className={classes.chaild}>
        <InputLabel htmlFor='standard-adornment-amount'>Costo del torneo</InputLabel>
        <Input
          {...handleValue}
          name='cost'
          id='standard-adornment-amount'
          value={handleValue.form.cost}
          placeholder='utiliza cantidades cerradas eje. 150'
          startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        />
      </FormControl>
      <FormControl className={classes.chaild}>
        <InputLabel id='demo-simple-select-label'>Organizador</InputLabel>
        <Select
          name='organizer'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={handleValue.form.organizer}
          {...handleValue}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.chaild}>
        <InputLabel id='demo-simple-select-label'>Juego</InputLabel>
        <Select
          name='organizer'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={handleValue.form.organizer}
          {...handleValue}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.chaild}>
        <InputLabel id='demo-simple-select-label'>Temporada</InputLabel>
        <Select
          name='organizer'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={handleValue.form.organizer}
          {...handleValue}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.chaild}>
        <Button type='submit' variant='contained' color='primary'>
          Agregar torneo
        </Button>
      </FormControl>
    </form>
  );
};

export default DataForm;
