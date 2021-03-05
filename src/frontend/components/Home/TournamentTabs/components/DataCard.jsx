/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import GroupIcon from '@material-ui/icons/Group';
import TodayIcon from '@material-ui/icons/Today';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

export const DataCard = ({ tournament }) => {
  const keys = ['id', 'name', 'game_name', 'cost_credit', 'cost_money', 'total_credit', 'total_money', 'players_enrolled', 'season_name'];
  const name = ['ID', 'Nombre', 'Juego', 'Credito', 'Costo', 'Credito Total', 'Costo Total', 'Total jugadores inscritos', 'Temporada'];
  const icons = [<VpnKeyIcon />, <AssignmentIcon />, <SportsEsportsIcon />, <CreditCardIcon />, <AttachMoneyIcon />, <AccountBalanceWalletIcon />, <LocalAtmIcon />, <GroupIcon />, <TodayIcon />];

  return keys.map((key, index) => (
    <ListItem divider={true}>
      <ListItemIcon>
        {icons[index]}
      </ListItemIcon>
      <ListItemText primary={tournament[`${key}`]} secondary={name[index]} />
    </ListItem>
  ));

};
