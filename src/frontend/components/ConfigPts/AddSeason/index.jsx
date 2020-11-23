/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Paper } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { getAllGamesRequest } from '../../../actions/games';
import useInputValueHandle from '../../../hooks/useInputHandler';
import { registerSeasonRequest } from '../../../actions/seasons';
import { Title } from '../../shared/Title';
import { useStyles, FormContainer } from './styles';

const AddSeason = (props) => {

  const classes = useStyles();
  const handleValue = useInputValueHandle({
    season: '',
  });

  const [game, setGame] = React.useState('');
  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date());

  useEffect(() => {
    props.getAllGamesRequest();
  }, []);

  const resetDate = (date) => {
    return moment(date).locale('e').format('YYYY-MM-DD');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerSeasonRequest({
      ...handleValue.form,
      starts: resetDate(start),
      ends: resetDate(end),
    }, game);
  };

  return (
    <Paper>
      <Title title='Nueva temporada' />
      <FormContainer noValidate autoComplete='off' onSubmit={handleSubmit}>
        <FormControl className={classes.chaild}>
          <TextField id='standard-basic' label='Nombre de la temporada' name='season' {...handleValue} />
        </FormControl>
        <FormControl className={classes.chaild}>
          <InputLabel id='demo-simple-select-label'>Juego</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={game}
            {...handleValue}
            name='game'
            onChange={(event) => { setGame(event.target.value); }}
          >
            {
              props.games.games.map((g) => {
                return (
                  <MenuItem value={g.id}>{g.game}</MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormControl className={classes.chaild}>
            <KeyboardDatePicker
              margin='normal'
              id='date-picker-dialog'
              label='Comienzo de la temporada'
              format='dd/MM/yyyy'
              value={start}
              onChange={(event) => { setStart(event); }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </FormControl>
          <FormControl className={classes.chaild}>
            <KeyboardDatePicker
              margin='normal'
              id='date-picker-dialog'
              label='Fin de la temporada'
              format='dd/MM/yyyy'
              value={end}
              onChange={(event) => { setEnd(event); }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </FormControl>
          <FormControl className={classes.chaild}>
            <Button variant='contained' color='primary' disableElevation type='submit'>
              Registrar Temporada
            </Button>
          </FormControl>
        </MuiPickersUtilsProvider>

      </FormContainer>
    </Paper>
  );
};

const mapStateToProps = (state) => state;

const dispatchToProps = {
  getAllGamesRequest,
  registerSeasonRequest,
};

export default connect(mapStateToProps, dispatchToProps)(AddSeason);
