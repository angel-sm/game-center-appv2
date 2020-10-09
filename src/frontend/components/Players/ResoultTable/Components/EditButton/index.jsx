/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import useInputHandler from '../../../../../hooks/useInputHandler';
import { updatePlayerRequest } from '../../../../../actions/players';

const EditButton = (props) => {
  const { name, nickname, id } = props.player;
  const [open, setOpen] = React.useState(false);

  const handleInput = useInputHandler({
    name: '',
    nickname: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const player = {
      name: handleInput.form.name || name,
      nickname: handleInput.form.nickname || nickname,
    };
    props.updatePlayerRequest(id, player);
    handleClose();
  };

  return (
    <div>
      <IconButton aria-label='delete' color='primary' onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Editar jugador</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Actualiza los datos de ${name}, los datos que no deseas cambiar solo dejarlos en blanco`}
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            name='name'
            label='Nombre del jugador'
            fullWidth
            {...handleInput}
          />
          <TextField
            margin='dense'
            name='nickname'
            label='Nickname del jugador'
            fullWidth
            {...handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={handleUpdate} color='primary'>
            actualizar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  updatePlayerRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(EditButton);
