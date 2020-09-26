/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
import 'date-fns';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Button, TextField, Select, MenuItem, Checkbox, FormControlLabel, Divider } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import { newtournamentRequest } from '../../../actions/tournaments';
import useInputValueHandle from '../../../hooks/useInputHandler';
import { getAllGamesRequest } from '../../../actions/games';
import { getSeasonRequest } from '../../../actions/seasons';
import useStyles from './styles';

const DataForm = (props) => {
  const classes = useStyles();
  const handleValue = useInputValueHandle({
    organizer: '',
    cost: '',
    description: '',
    tournament: '',
  });

  const [check, setCheck] = React.useState(false);
  const [start, setStart] = React.useState(new Date());
  const [game, setGame] = React.useState('');
  const [season, setSeason] = React.useState('');

  useEffect(() => {
    props.games.games.length > 0 ? null : props.getAllGamesRequest();
  }, [check]);

  const hanldeCheck = (event) => {
    setCheck(event.target.checked);
    setGame('');
    setSeason('');
  };

  const handleChange = (event) => {
    setGame(event.target.value);
  };

  const handleDateChange = (date) => {
    setStart(date);
  };

  const resetDate = (date) => {
    return moment(date).locale('e').format('YYYY-MM-DD');
  };

  const handleSeason = (event) => {
    props.getSeasonRequest(event.target.value);
    setSeason(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (check) {
      props.newtournamentRequest({ ...handleValue.form, start: resetDate(start) }, props.seasons.season.gameId, props.seasons.season.id);
    } else {
      props.newtournamentRequest({ ...handleValue.form, start: resetDate(start) }, game, null);
    }
  };

  return (

    <form noValidate autoComplete='off' className={classes.root} onSubmit={handlerSubmit}>
      <FormControlLabel
        control={<Checkbox checked={check} onChange={hanldeCheck} name='checkedA' />}
        label='Agregar el nuevo torneo a una temporada'
      />
      {
        check ? (
          <FormControl className={classes.chaild}>
            <InputLabel id='demo-simple-select-label'>Agregar a la temporada: </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={season}
              fullWidth
              onChange={handleSeason}
            >
              {
                props.seasons.seasons.map((s) => {
                  return (
                    <MenuItem value={s.id}>{s.season}</MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        ) : null
      }
      <Divider />
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
        <TextField id='standard-basic' label='Nombre del organizador' name='organizer' {...handleValue} />
      </FormControl>
      {
        check ? null : (
          <FormControl className={classes.chaild}>
            <InputLabel id='demo-simple-select-label'>Juego </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={game}
              fullWidth
              onChange={handleChange}
            >
              {
                props.games.games.map((s) => {
                  return (
                    <MenuItem value={s.id}>{s.game}</MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        )
      }
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
  getAllGamesRequest,
  getSeasonRequest,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, dispatchStateToProps)(DataForm);

