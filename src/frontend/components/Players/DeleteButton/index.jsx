import React from 'react';
import Button from '@material-ui/core/Button';

const DeleteButton = ({ playerId }) => {
  const handleDelete = () => {
    console.log(playerId);
  };
  return (
    <Button color='secondary' disableElevation onClick={handleDelete}>
      Eliminar jugador
    </Button>
  );
};

export default DeleteButton;
