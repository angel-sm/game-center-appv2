/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import InputLabel from '@material-ui/core/InputLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField';

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
      <Button variant='outlined' color='primary' onClick={handleClickOpen} {...props}>
        Usar creditos
      </Button>
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
              startAdornment={(
                <InputAdornment position='start'>
                  <LocalShippingIcon />
                </InputAdornment>
              )}
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
              helperText={credit > props.maxOfCredit ? 'Credito maximo disponible' : null}
              value={credit > props.maxOfCredit ? props.maxOfCredit : credit}
              onChange={(element) => { setCredit(element.target.value); }}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-with-icon-adornment'>Comentario u observacion</InputLabel>
            <Input
              id='input-with-icon-adornment'
              startAdornment={(
                <InputAdornment position='start'>
                  <VisibilityIcon />
                </InputAdornment>
              )}
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
