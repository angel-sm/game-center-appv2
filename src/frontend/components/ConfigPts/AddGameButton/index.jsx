/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import useInputHandler from '../../../hooks/useInputHandler';
import { registerGameRequest } from '../../../actions/games';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabIcon: {
    margin: theme.spacing(1),
  },
}));

const AddGameButton = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = useInputHandler({
    game: '',
    description: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerGameRequest(handleInput.form);
    handleClose();
    window.location.href = '/config-points';
  };

  return (
    <div>
      <Fab variant='extended' color='primary' onClick={handleClickOpen} className={classes.fab}>
        Agregar juego
        <SportsEsportsIcon className={classes.fabIcon} />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserta los datos del jugador a registrar
          </DialogContentText>
          <TextField label='Nombre del juego' name='game' {...handleInput} fullWidth />
          <TextField label='Descripcion' name='description' {...handleInput} fullWidth />
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
  registerGameRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGameButton);
