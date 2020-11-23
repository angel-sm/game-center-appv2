/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable radix */
import 'date-fns';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  InputLabel,
  FormControl,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import CloseIcon from '@material-ui/icons/Close';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Alert from '@material-ui/lab/Alert';
import useInputValueHandle from '../../../hooks/useInputHandler';
import { addPrizeRequest } from '../../../actions/prizes';
import { nextStep } from '../../../actions/pending';
import { setErrorRequest } from '../../../actions/status';
import { cancelRegisterTournamentRequest } from '../../../actions/tournaments';

import { useStyles, ButtonContainer, FormContainer, ButtonControl } from './styles';

let numPlace = 2;

const Earn = (props) => {

  const classes = useStyles();
  const handleValue = useInputValueHandle({});

  const [places, setPlace] = useState([{
    place: 1,
  }]);

  const [error, setError] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    const placesList = [];
    let total = 0;

    Object.keys(handleValue.form).map((k, i) => {
      placesList.push({ ...places[i], percent: Math.round(parseInt(handleValue.form[`${k}`])) });
    });
    placesList.map((place) => {
      total = total + place.percent;
    });

    if (total !== 100) {
      setError('El porcentaje debe sumar un total del 100%');
      return false;
    }
    placesList.map((pl) => {
      props.addPrizeRequest(pl);
    });
    props.nextStep(0);
    window.location.href = '/registertournament';
  };

  //Eliminar un lugar
  const hanldeDeletePlace = () => {
    const cleanPlaces = places.slice(1, places.length);
    delete handleValue.form[`${places.length - 1}`];
    const updatePlaces = [];
    cleanPlaces.map((pl) => {
      if (pl.place !== 0) {
        pl.place = pl.place - 1;
        updatePlaces.push(pl);
      } else {
        updatePlaces.push(pl);
      }
    });
    setPlace([...updatePlaces]);
    numPlace--;
  };

  //Agregar un lugar
  const handleAddPlace = () => {
    setError('');
    setPlace([...places, {
      place: numPlace,
    }]);
    numPlace++;
  };

  const handleCancel = () => {
    setError('');
    props.cancelRegisterTournamentRequest(props.tournaments.tournamentId);
    document.cookie = 'PENDINGSTEP=0';
    document.cookie = 'PENDINGID=';
  };

  return (
    <Paper>
      <Toolbar>
        <Typography variant='h6' id='tableTitle' component='div'>
          Lugares y porcentajes
        </Typography>
      </Toolbar>
      <FormContainer>

        <form className={classes.root} onSubmit={handlerSubmit}>
          {
            places.map((p, i) => {
              return (
                <FormControl className={classes.chaild} key={`${p}${i}`}>
                  <InputLabel htmlFor='standard-adornment-amount'>{`lugar ${i + 1}`}</InputLabel>
                  <Input
                    {...handleValue}
                    name={`${i}`}
                    id='standard-adornment-amount'
                    value={handleValue.form.cost}
                    startAdornment={<InputAdornment position='start'>%</InputAdornment>}
                    endAdornment={(
                      places.length !== 1 ?
                        i + 1 === places.length ? (
                          <IconButton color='secondary' onClick={places.length > 1 ? hanldeDeletePlace : null}>
                            <CloseIcon />
                          </IconButton>
                        ) : null : null
                    )}
                  />
                </FormControl>
              );
            })
          }
          <ButtonContainer>
            <FormControl>
              <Button onClick={handleAddPlace} variant='contained' color='primary' disableElevation endIcon={<AddCircleOutlineIcon />}>
                Agregar lugar
              </Button>
            </FormControl>
            <ButtonControl>
              <Button type='submit' variant='outlined' color='secondary' onClick={handleCancel} className={classes.space}>
                Cancelar
              </Button>
              <Button type='submit' variant='contained' color='primary'>
                Finalizar
              </Button>
            </ButtonControl>
          </ButtonContainer>
        </form>
      </FormContainer>
      {
        error !== '' ? <Alert severity='error'>{error}</Alert> : null
      }
    </Paper>
  );
};

const dispatchStateToProps = {
  nextStep,
  addPrizeRequest,
  setErrorRequest,
  cancelRegisterTournamentRequest,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, dispatchStateToProps)(Earn);
