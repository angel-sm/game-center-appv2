/* eslint-disable react/button-has-type */
import React from 'react';

import('./DeletePlayerButton.scss');

const handlerDelete = (_event) => {
  console.log(_event.target.id);
};

const DeletePlayerButton = ({ id }) => {
  return (
    <button id={id} className='Delete-player-button' onClick={handlerDelete}>
      Eliminar
    </button>
  );
};

export default DeletePlayerButton;
