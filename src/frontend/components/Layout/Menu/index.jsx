/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Create,
  Search,
  CreditCard,
  AttachMoney,
  Settings,
  Assessment,
  Face,
  Home,
} from '@material-ui/icons';
import { BtnCloseSesion } from './components/BtnCloseSesion';

const options = [
  {
    option: 'Inicio',
    url: '/',
    icon: <Home />,
  }, {
    option: 'Nuevo torneo',
    url: '/register-tournament',
    icon: <Create />,
  }, {
    option: 'Buscar torneo',
    url: '/search-tournaments',
    icon: <Search />,
  }, {
    option: 'Registro de movimientos',
    url: '/credit',
    icon: <CreditCard />,
  }, {
    option: 'Jugadores',
    url: '/players',
    icon: <Face />,
  }, {
    option: 'Puntos tienda',
    url: '/store-points',
    icon: <AttachMoney />,
  }, {
    option: 'Temporadas',
    url: '/seasons',
    icon: <Settings />,
  }, {
    option: 'Reportes',
    url: '/reports',
    icon: <Assessment />,
  },
];

export function Menu() {
  return (
    <List>
      {options.map((option) => (
        <Link
          to={option.url}
          style={{ textDecoration: 'none', color: '#4e4e4e' }}
          key={option.url}
        >
          <ListItem button key={option.option}>
            <ListItemText primary={option.option} />
            <ListItemIcon>{option.icon}</ListItemIcon>
          </ListItem>
        </Link>
      ))}
      <BtnCloseSesion />
    </List>
  );
};
