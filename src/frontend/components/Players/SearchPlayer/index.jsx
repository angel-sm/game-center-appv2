/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { FormControl, Button, Paper, Toolbar, Typography } from '@material-ui/core';
import { getAllPlayersRequest, searchPlayerRequest } from '../../../actions/players';
import useInputHandler from '../../../hooks/useInputHandler';
import { TypeSearch } from './components/TypeSearch';
import { setErrorRequest } from '../../../actions/status';
import { Form, Space, useStyles } from './styles';

const SearchPlayer = (props) => {

  const classes = useStyles();

  const hanlderInput = useInputHandler({
    player: '',
  });

  useEffect(() => {
    setTimeout(() => {
      props.setErrorRequest('');
    }, 3500);
  }, [props.status.error]);

  const [type, setType] = useState('name');

  const handleChange = (type) => {
    setType(type);
    hanlderInput.form.player = '';
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.searchPlayerRequest(hanlderInput.form.player, type);
    return true;
  };

  return (
    <Paper className={classes.root}>
      <Toolbar>
        <Typography variant='h6' id='tableTitle' component='div'>
          Buscar jugador
        </Typography>
      </Toolbar>
      <Form onSubmit={handleSearch}>
        <Space>Buscar por: </Space>
        <TypeSearch handleChange={handleChange} value={type} />
        <Space> - </Space>
        <FormControl>
          {props.status.error !== '' ? (
            <TextField error helperText={`${props.status.error}`} value={hanlderInput.form.player} />
          ) : <TextField id='standard-basic' {...hanlderInput} name='player' value={hanlderInput.form.player} />}
        </FormControl>
        <Space />
        {
          hanlderInput.form.player !== '' ? (
            <Button
              variant='contained'
              color={props.status.error !== '' ? 'secondary' : 'primary'}
              disableElevation
              type='submit'
            >
              buscar
            </Button>
          ) : (
            <Button
              variant='outlined'
              disabled
            >
              buscar
            </Button>
          )
        }
      </Form>
    </Paper>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getAllPlayersRequest,
  searchPlayerRequest,
  setErrorRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(SearchPlayer);
