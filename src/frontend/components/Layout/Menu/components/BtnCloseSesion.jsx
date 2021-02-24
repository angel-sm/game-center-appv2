/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const hanldeCloseSesion = (event) => {
  event.preventDefault();
  document.cookie = 'USER=';
  document.cookie = 'USERM=';
  document.cookie = 'PENDINGSTEP=';
  document.cookie = 'CENTERID=';
  document.cookie = 'TOKEN=';
  document.cookie = 'PENDINGID=';
  props.logout({});
  window.location.href = '/';
};

export function BtnCloseSesion() {
  return (
    <ListItem button>
      <ListItemText primary='Cerrar sesion' onClick={hanldeCloseSesion} />
      <ListItemIcon><ExitToAppIcon /></ListItemIcon>
    </ListItem>
  );
}
