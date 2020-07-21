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

import useStyles from './styles';

let numPlace = 0;

const Earn = () => {

  const classes = useStyles();
  const handleValue = useInputValueHandle({});

  const [places, setPlace] = useState([{
    position: 0,
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
      console.log('No jala');
      return false;
    }
    console.log('si jala');
  };

  //Eliminar un lugar
  const hanldeDeletePlace = () => {
    const cleanPlaces = places.slice(1, places.length);
    delete handleValue.form[`${places.length - 1}`];
    const updatePlaces = [];
    cleanPlaces.map((pl) => {
      pl.place = pl.place - 1;
      updatePlaces.push(pl);
    });
    setPlace([...updatePlaces]);
    numPlace--;
    recalculatePercent();
    console.log(percentUsed);
  };

  //Agregar un lugar
  const handleAddPlace = () => {
    setPlace([...places, {
      place: numPlace,
    }]);
    numPlace++;
  };

  return (
    <>
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
      </form>
    </>
  );
};

const dispatchStateToProps = {

};

export default connect(null, dispatchStateToProps)(Earn);
