import React from 'react';
import { FormControl, InputLabel, TextField, InputAdornment, OutlinedInput, Button } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './Form.styles';

const SignInForm = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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
    <form noValidate autoComplete='off' className={classes.root}>
      <FormControl className={classes.chaild}>
        <TextField id='outlined-basic' label='Correo electronico' variant='outlined' />
      </FormControl>
      <FormControl variant='outlined' className={classes.chaild}>
        <InputLabel htmlFor='outlined-adornment-password'>Contraseña</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
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
          labelWidth={80}
        />
      </FormControl>
      <FormControl className={classes.chaild}>
        <Button href='/centers' variant='contained' color='primary'>
          Iniciar sesion
        </Button>
      </FormControl>
    </form>
  );
};

export default SignInForm;

