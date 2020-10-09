/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { setPointsCompetitorRequest } from '../../../../../actions/competitors';

const AddPoints = (props) => {
  const { playerId, player, isSelected } = props;
  const [open, setOpen] = React.useState(false);
  const [points, setPoints] = React.useState(0);
  const [place, setPlace] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetPoints = () => {
    props.setPointsCompetitorRequest(playerId, points, place);
    window.location.href = '/';
  };

  return (
    <div>
      <Button size='small' variant='outlined' onClick={handleClickOpen} disabled={isSelected}>
        Agregar puntos y posicion
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>
          {`JUGADOR - ${player}`}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label='Puntos finales del jugador'
            margin='dense'
            type='number'
            variant='outlined'
            fullWidth
            min={0}
            value={points < 0 ? points * -1 : points}
            onChange={(element) => { setPoints(element.target.value); }}
          />
          <TextField
            autoFocus
            label='Lugar del jugador'
            margin='dense'
            type='number'
            variant='outlined'
            fullWidth
            min={0}
            value={place < 0 ? place * -1 : place}
            onChange={(element) => { setPlace(element.target.value); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button onClick={handleSetPoints} color='primary' variant='contained'>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  setPointsCompetitorRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(AddPoints);
