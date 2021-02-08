/* eslint-disable radix */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Paper,
  Table,
  Typography,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import useInputHandler from '../../../../../../../hooks/useInputHandler';
import { updatePlayerRequest } from '../../../../../../../actions/players';

const Form = styled.form`
display: flex;
width: 40%;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tableTool: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const mapStateToProps = (state) => state;
const dispatchStateToProps = {
  updatePlayerRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)((props) => {
  const classes = useStyles();
  const playerKeys = ['Nombre', 'Credito', 'Nickname', 'Apellido', 'Email', 'Se unio', 'Seleccionar'];
  const valuesKeys = ['name', 'credit', 'nickname', 'lastName', 'email', 'created'];

  const { players } = props.players;
  const { credit, name, id } = props.player;

  const [value, setValue] = React.useState('');

  const hanlderInput = useInputHandler({
    points: 2,
  });

  const handlerTransfer = (event) => {
    event.preventDefault();
    const pointsToTransfer = hanlderInput.form.points < 2 ? 2 : hanlderInput.form.points > credit ? credit : hanlderInput.form.points;

    const [playerToTranferCredit] = players.filter((player) => (player.id === value ? player : null));
    props.updatePlayerRequest(id, { credit: credit - pointsToTransfer < 0 ? 0 : (pointsToTransfer - credit) * -1 });
    props.updatePlayerRequest(value, { credit: playerToTranferCredit.credit + parseInt(pointsToTransfer) });

    window.location.href = '/players';
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const setTransferComponent = () => {
    const [isSelected] = players.filter((player) => (player['id'] === value ? player : null));
    return (
      <>
        <Typography variant='h6' id='tableTitle' component='div'>
          { `Transferir a ${isSelected.name} un total de` }
        </Typography>
        <TextField
          id='filled-full-width'
          placeholder='Puntos a transferir'
          margin='normal'
          type='number'
          name='points'
          helperText={hanlderInput.form.points > credit ? `puntos maximo de ${name}` : hanlderInput.form.points < 2 ? ' 2 puntos minimos para transferir' : ''}
          value={hanlderInput.form.points < 0 ? 0 : hanlderInput.form.points > credit ? credit : hanlderInput.form.points}
          {...hanlderInput}
        />
      </>
    );
  };

  return (
    <Paper className={classes.paper}>
      <Toolbar className={classes.tableTool}>
        <Typography variant='h6' id='tableTitle' component='div'>
          Selecciona un jugador para transferir
        </Typography>
        <Form onSubmit={handlerTransfer}>
          {
            value ? setTransferComponent() : null
          }
          <IconButton aria-label='delete' type='submit'>
            <SendIcon fontSize='large' />
          </IconButton>
        </Form>
      </Toolbar>
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                {
                  playerKeys.map((key) => {
                    return (<TableCell key={key}>{key}</TableCell>);
                  })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                players.map((player, index) => {
                  return (
                    <>
                      <TableRow>
                        {
                          valuesKeys.map((item, i) => <TableCell key={i} component='th' scope='row'>{player[`${item}`]}</TableCell>)
                        }
                        <TableCell component='th' scope='row'>
                          <FormControl component='fieldset'>
                            <RadioGroup aria-label='gender' name='playerToTranfer' value={value} onChange={handleChange}>
                              <FormControlLabel value={player['id']} control={<Radio />} />
                            </RadioGroup>
                          </FormControl>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Paper>
  );
});
