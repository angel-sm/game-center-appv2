/* eslint-disable import/no-unresolved */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
import 'date-fns';
import React from 'react';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Button, TextField, Select, MenuItem } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import { newtournamentRequest } from '../../../actions/tournaments';
import useInputValueHandle from '../../../hooks/useInputHandler';

import useStyles from './styles';

const DataForm = (props) => {
  const classes = useStyles();
  const handleValue = useInputValueHandle({
    organizer: '',
    cost: '',
    description: '',
    tournament: '',
    game: '',
  });

  const [start, setStart] = React.useState(new Date());
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleDateChange = (date) => {
    setStart(date);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    props.newtournamentRequest({ ...handleValue.form, start: moment(start).locale('e').format('YYYY-MM-DD') });
    console.log();
  };

  return (

    <form noValidate autoComplete='off' className={classes.root} onSubmit={handlerSubmit}>
      <FormControl className={classes.chaild}>
        <TextField id='standard-basic' label='Nombre del torneo' name='tournament' {...handleValue} />
      </FormControl>
      <FormControl variant='outlined' className={classes.chaild}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin='normal'
            name='start'
            id='date-picker-dialog'
            label='Fecha de inicio del torneo'
            format='dd/MM/yyyy'
            value={start}
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
        <InputLabel id='demo-simple-select-label'>Agregar a la temporada: </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value={10}>temporada 1</MenuItem>
          <MenuItem value={20}>temporada 2</MenuItem>
          <MenuItem value={30}>temporada 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.chaild}>
        <TextField id='standard-basic' label='Nombre del organizador' name='organizer' {...handleValue} />
      </FormControl>
      <FormControl className={classes.chaild}>
        <TextField id='standard-basic' label='Juego' name='game' {...handleValue} />
      </FormControl>
      <FormControl className={classes.chaild}>
        <TextField id='standard-basic' label='Descripcion' name='description' {...handleValue} />
      </FormControl>
      <FormControl className={classes.chaild}>
        <Button type='submit' variant='contained' color='primary'>
          Registrar datos del torneo
        </Button>
      </FormControl>
    </form>
  );
};

const dispatchStateToProps = {
  newtournamentRequest,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, dispatchStateToProps)(DataForm);

