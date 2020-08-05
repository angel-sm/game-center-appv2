/* eslint-disable import/no-unresolved */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
import 'date-fns';
import React from 'react';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Button, TextField } from '@material-ui/core';
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
            disableToolbar
            name='start'
            variant='inline'
            format='dd/MM/yyyy'
            margin='normal'
            id='date-picker-inline'
            label='Fecha de inicio del torneo'
            value={start}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <FormControl className={classes.chaild}>
        <TextField id='standard-basic' label='Nombre del organizador' name='organizer' {...handleValue} />
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
        <TextField id='standard-basic' label='Juego' name='game' {...handleValue} />
      </FormControl>
      <FormControl className={classes.chaild}>
        <TextField id='standard-basic' label='Descripcion' name='description' {...handleValue} />
      </FormControl>
      <FormControl className={classes.chaild}>
        <Button type='submit' variant='contained' color='primary'>
          Agregar torneo
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

