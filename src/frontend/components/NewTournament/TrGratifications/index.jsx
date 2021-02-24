/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  IconButton,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing(1),
    width: '90%',
  },
  input: {
    width: '100%',
  },
}));

const gratificationsValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let totalValue = 0;

export const TrGratifications = ({ handlerGratification, handlerError }) => {
  const classes = useStyles();

  const [inp, setInp] = useState([1]);
  const [total, setTotal] = useState([]);
  let [localError, setLocalError] = useState(false);

  const validateError = (currentValue, isDelete, params) => {
    if (currentValue > 100) {
      localError = true;
      setLocalError(localError);
      handlerError(localError, 'gratifications');
    } else {
      localError = false;
      setLocalError(localError);
      handlerError(localError, 'gratifications');
      isDelete ? handlerGratification(params, isDelete) : handlerGratification(params, isDelete);
    }
  };

  //Eliminar un lugar
  const hanldeDeletePlace = () => {
    inp.pop();
    setInp([...inp]);
    const last = total.pop();
    setTotal([...total]);
    totalValue = totalValue - last;
    validateError(totalValue, true, {});
  };

  //Agregar un lugar
  const handleAddPlace = () => {
    inp.push(inp.length + 1);
    setInp([...inp]);
  };

  const validateValue = (valor, id) => {
    if (total[`${id}`] === undefined) {
      total[`${id}`] = valor;
      setTotal(total);
      totalValue += total[`${id}`];
    } else {
      let aux = total[`${id}`];
      totalValue = totalValue - aux;
      total[`${id}`] = valor;
      setTotal(total);
      totalValue += total[`${id}`];
    }
    validateError(totalValue, false, { place: id, gratification_percent: valor });
  };

  return (
    <>
      {
        inp.map((p, i) => {
          return (
            <FormControl className={classes.formControl} key={i} variant='outlined'>
              <InputLabel htmlFor='age-native-simple'>{`premio en % para el lugar ${i + 1}`}</InputLabel>
              <Select
                native
                autoWidth
                className={classes.input}
                onChange={(event) => {
                  const vl = parseInt(event.target.value);
                  validateValue(vl, event.target.id);
                }}
                label={`premio en % para el lugar ${i + 1}`}
                inputProps={{
                  name: `${i}`,
                  id: `${i}`,
                }}
              >
                <option aria-label='None' value='' />
                { gratificationsValues.map((val) => <option key={val} value={val}>{`% ${val}`}</option>) }
              </Select>
              <IconButton onClick={hanldeDeletePlace} color='secondary' disabled={inp.length === 1}>
                <HighlightOffIcon />
              </IconButton>
            </FormControl>
          );
        })
      }
      <FormControl className={classes.button}>
        <Button onClick={handleAddPlace} variant='outlined' disabled={localError} size='small' color='primary' disableElevation endIcon={<AddCircleOutlineIcon />}>
          Agregar lugar
        </Button>

      </FormControl>
      {
        localError ? <Alert severity='error'>La suma de los premios debe ser maximo 100</Alert> : null
      }
    </>
  );
};
