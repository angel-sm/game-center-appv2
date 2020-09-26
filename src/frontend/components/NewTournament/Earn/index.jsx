/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable radix */
import 'date-fns';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Button, Toolbar } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import useInputValueHandle from '../../../hooks/useInputHandler';
import { addPrizeRequest } from '../../../actions/prizes';
import { nextStep } from '../../../actions/pending';
import { setErrorRequest } from '../../../actions/status';
import { cancelRegisterTournamentRequest } from '../../../actions/tournaments';

import useStyles from './styles';
import ErrorBar from '../../shared/ErrorBar';

let numPlace = 1;

const Earn = (props) => {

  const classes = useStyles();
  const handleValue = useInputValueHandle({});

  const [places, setPlace] = useState([{
    place: 0,
  }]);

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
      props.setErrorRequest('El porcentaje debe sumar un total del 100%');
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
    setPlace([...places, {
      place: numPlace,
    }]);
    numPlace++;
  };

  const handleCancel = () => {
    props.cancelRegisterTournamentRequest(props.tournaments.tournamentId);
    document.cookie = 'PENDINGSTEP=0';
    document.cookie = 'PENDINGID=';
  };

  return (
    <>
      {
        props.status.error ? (
          <FormControl className={classes.chaild}>
            <ErrorBar error={props.status.error} />
          </FormControl>
        ) : null
      }
      <Toolbar>
        <Button onClick={handleAddPlace} variant='contained' color='primary'>
          Agregar posicion
        </Button>
        <Button onClick={places.length > 1 ? hanldeDeletePlace : null} variant='contained' color='primary'>
          Eliminar ultima posicion
        </Button>
      </Toolbar>
      <form noValidate autoComplete='off' className={classes.root} onSubmit={handlerSubmit}>
        {
          places.map((p, i) => {
            return (
              <FormControl className={classes.chaild}>
                <InputLabel htmlFor='standard-adornment-amount'>{`lugar ${i + 1}`}</InputLabel>
                <Input
                  {...handleValue}
                  name={`${i}`}
                  id='standard-adornment-amount'
                  value={handleValue.form.cost}
                  placeholder='Usa porcentaje cerrados'
                  startAdornment={<InputAdornment position='start'>%</InputAdornment>}
                />
              </FormControl>
            );
          })
        }
        <FormControl className={classes.chaild}>
          <Button type='submit' variant='contained' color='primary'>
            Agregar torneo
          </Button>
        </FormControl>
        <FormControl className={classes.chaild}>
          <Button type='submit' variant='contained' color='secondary' onClick={handleCancel}>
            Cancelar
          </Button>
        </FormControl>
      </form>
    </>
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
