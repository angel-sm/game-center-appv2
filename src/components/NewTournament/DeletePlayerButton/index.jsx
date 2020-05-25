/* eslint-disable react/button-has-type */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import('./DeletePlayerButton.scss');

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    margin: '10em auto',
    background: theme.palette.background.paper,
    padding: theme.spacing(2, 2),
    textAlign: 'center',
  },
}));

const deleteUser = (id) => {
  console.log(id);
};

const DeletePlayerButton = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [identificator, setId] = React.useState('');

  const handleOpen = (_event) => {
    setId(_event.target.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={useStyles().paper}>
      {deleteUser(identificator)}
      <h1>Jugador eliminado</h1>
    </div>
  );

  return (
    <>
      <button id={id} className='Delete-player-button' onClick={handleOpen}>
        Eliminar
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </>
  );
};

export default DeletePlayerButton;
