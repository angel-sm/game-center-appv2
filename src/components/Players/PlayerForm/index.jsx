import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import { Button, Paper } from '@material-ui/core';

import useStyles from './PlayerForm-styles';

const DataPlayerForm = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={null} className='form-container' component={Paper}>
      <FormControl className={useStyles().children}>
        <FormControl className={useStyles().children}>
          <TextField
            name='organizer'
            label='Email del jugador'
            variant='outlined'
            className={useStyles().textField}
          />
        </FormControl>
        <FormControl className={useStyles().textField} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name='password'
            onChange={handleChange('password')}
            endAdornment={(
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={70}
          />
        </FormControl>
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        size='large'
      >
        Agregar jugador
      </Button>
    </form>
  );
};

export default DataPlayerForm;
