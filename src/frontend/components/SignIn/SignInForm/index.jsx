import React from 'react';
import { connect } from 'react-redux';
import { FormControl, InputLabel, TextField, InputAdornment, OutlinedInput, Button } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { signInSolve } from '../../../actions/auth';

import useStyles from './Form.styles';

const SignInForm = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    email: '',
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

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log('entro');
    props.signInSolve(values, '/competitors');
  };

  return (
    <form noValidate autoComplete='off' className={classes.root} onSubmit={handlerSubmit}>
      <FormControl className={classes.chaild}>
        <TextField onChange={handleChange('email')} id='outlined-basic' label='Correo electronico' variant='outlined' name='email' />
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
        <Button type='submit' variant='contained' color='primary'>
          Iniciar sesion
        </Button>
      </FormControl>
    </form>
  );
};

const dispatchStateToProps = { signInSolve };

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, dispatchStateToProps)(SignInForm);

