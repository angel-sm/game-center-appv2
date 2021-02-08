/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HistoryList(props) {
  const classes = useStyles();
  const { history } = props;
  const keys = ['sale', 'product', 'quantity'];
  const header = ['Venta', 'Producto', 'Cantidad'];
  return (
    <div className={classes.root}>
      {
        history.map((prod, index) => (
          <>
            <List>
              <ListItem button>
                {
                  keys.map((item, i) => (
                    <ListItemText primary={`${header[i]}: ${prod[`${item}`]}`} />
                  ))
                }
              </ListItem>
            </List>
            <Divider />
          </>
        ))
      }
    </div>
  );
}
