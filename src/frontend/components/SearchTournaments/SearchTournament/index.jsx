/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { FormControl, Button, Paper, Toolbar, Typography, Select, MenuItem } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { searchTournamentRequest, searchResult, searchTournamentsRequest } from '../../../actions/tournaments';
import useInputHandler from '../../../hooks/useInputHandler';
import TournamentResult from '../TournamentResult';
import { FormContainer, useStyles, Form, ButtonContainer } from './styles';

const SearchTournament = (props) => {
  const classes = useStyles();
  const hanlderInput = useInputHandler({
    info: '',
  });

  const [type, setType] = React.useState('tournament');
  const [searchDate, setSearchDate] = React.useState(new Date());

  useEffect(() => {
    props.searchResult([]);
  }, []);

  const resetDate = (date) => {
    return moment(date).locale('e').format('YYYY-MM-DD');
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (type === 'all') {
      props.searchTournamentsRequest(props.center, 'tournaments');
    } else {
      props.searchTournamentRequest({
        info: hanlderInput.form.info === '' ? resetDate(searchDate) : hanlderInput.form.info,
        by: type,
      });
    }
  };

  const options = ['Nombre', 'Costo', 'Fecha inicio', 'Fecha cierre', 'Juego', 'Organizador', 'Todos'];
  const optionValue = ['tournament', 'cost', 'start', 'end', 'game', 'organizer', 'all'];

  return (
    <>
      <Paper className={classes.space}>
        <Toolbar>
          <Typography variant='h6' id='tableTitle' component='div'>
            Buscar torneo
          </Typography>
        </Toolbar>
        <FormContainer>
          <Form onSubmit={handleSearch}>
            <FormControl className={classes.chaild}>
              <span className={classes.spaceSides}>Buscar por</span>
              <Select
                className={classes.spaceSides}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                {
                  options.map((option, index) => <MenuItem key={option} value={optionValue[index]}>{option}</MenuItem>)
                }
              </Select>
              <span className={classes.spaceSides}> - </span>
              {
                type === 'start' || type === 'end' ? (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin='normal'
                      name='start'
                      id='date-picker-dialog'
                      format='dd/MM/yyyy'
                      value={searchDate}
                      onChange={(date) => setSearchDate(date)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                ) : type === 'all' ? null : (<TextField id='standard-basic' {...hanlderInput} name='info' className={classes.spaceSides} placeholder='Buscar' />
                )
              }
              <ButtonContainer>
                <Button variant='contained' color='primary' disableElevation type='submit'><SearchIcon /></Button>
              </ButtonContainer>
            </FormControl>
          </Form>
        </FormContainer>
      </Paper>
      {
        props.tournaments.searchResult.length > 0 ? <TournamentResult tournament={props.tournaments.searchResult} /> : null
      }
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  searchTournamentRequest,
  searchResult,
  searchTournamentsRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(SearchTournament);
