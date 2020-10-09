/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
  Button,
} from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';

export default function CreditButton(props) {
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const [credit, setCredit] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color='primary' aria-label='add to shopping cart' onClick={handleClickOpen} {...props}>
        <StorefrontIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Canges y transacciones de puntos en la tienda</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Registra la transaccion y el producto que ${props.player} cangearea con sus puntos disponibles`}
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-with-icon-adornment'>Producto</InputLabel>
            <Input
              id='input-with-icon-adornment'
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              type='number'
              fullWidth
              min={0}
              helperText={credit > props.maxofcredit ? 'Credito maximo disponible' : null}
              value={credit > props.maxofcredit ? props.maxofcredit : credit}
              onChange={(element) => { setCredit(element.target.value); }}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-with-icon-adornment'>Comentario u observacion</InputLabel>
            <Input
              id='input-with-icon-adornment'
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='second'>
            Cancelar
          </Button>
          <Button onClick={handleClose} color='primary'>
            Cangear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
