/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
import 'date-fns';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  FormControl,
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Divider,
  InputLabel,
  InputAdornment,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { newtournamentRequest } from '../../../actions/tournaments';
import useInputValueHandle from '../../../hooks/useInputHandler';
import { getAllGamesRequest } from '../../../actions/games';
import { getSeasonRequest } from '../../../actions/seasons';
import { useStyles, FormContainer, ButtonContainer } from './styles';

const DataForm = (props) => {
  const classes = useStyles();
  const handleValue = useInputValueHandle({
    organizer: '',
    cost: 0,
    earn: 0,
    creditPerPlayer: 0,
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
      props.newtournamentRequest({
        ...handleValue.form,
        start: resetDate(start),
        season: props.seasons.season.id,
        seasonName: props.seasons.season.season,
        cost: parseInt(handleValue.form.earn) + parseInt(handleValue.form.creditPerPlayer),
      }, props.seasons.season.gameId);
    } else {
      props.newtournamentRequest({
        ...handleValue.form,
        start: resetDate(start),
        season: null,
        seasonName: null,
        cost: parseInt(handleValue.form.earn) + parseInt(handleValue.form.creditPerPlayer),
      }, game);
    }
  };

  return (
    <Paper>
      <Toolbar>
        <Typography variant='h6' id='tableTitle' component='div'>
          Nuevo torneo
        </Typography>
      </Toolbar>
      <FormContainer>
        <form className={classes.root} onSubmit={handlerSubmit}>
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
            <InputLabel htmlFor='standard-adornment-amount'>Costo</InputLabel>
            <Input
              {...handleValue}
              name='earn'
              id='standard-adornment-amount'
              value={handleValue.form.earn}
              startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            />
          </FormControl>
          <FormControl className={classes.chaild}>
            <InputLabel htmlFor='standard-adornment-amount'>Credito</InputLabel>
            <Input
              {...handleValue}
              name='creditPerPlayer'
              id='standard-adornment-amount'
              value={handleValue.form.creditPerPlayer}
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
          <ButtonContainer>
            <Button type='submit' variant='contained' color='primary' size='medium' disableElevation endIcon={<NavigateNextIcon />}>
              Registrar datos del torneo
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Paper>
  );
};

const dispatchStateToProps = {
  newtournamentRequest,
  getAllGamesRequest,
  getSeasonRequest,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, dispatchStateToProps)(DataForm);

