/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useInputHandler from '../../../hooks/useInputHandler';
import { registerPlayerRequest } from '../../../actions/players';

const AddUserButton = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = useInputHandler({
    name: '',
    nickname: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerPlayerRequest(handleInput.form);
    handleClose();
  };

  return (
    <div>
      <IconButton aria-label='Regitrar un jugador nuevo' onClick={handleClickOpen}>
        <PersonAddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserta los datos del jugador a registrar
          </DialogContentText>
          <TextField label='Nombre del jugador' name='name' {...handleInput} fullWidth />
          <TextField label='Nickname del jugador' name='nickname' {...handleInput} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary' variant='outlined'>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color='primary' variant='contained'>
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  registerPlayerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserButton);
