/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export const AddPointsButton = ({ competitor, handlerAddPaid, tournament }) => {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
    handlerAddPaid('paid', competitor.id, tournament);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={() => setOpen(true)} disabled={competitor.id === undefined}>
        {`${competitor.paid === 'No' ? 'Agregar pago' : 'Editar puntos y lugar'}`}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='form-dialog-title' maxWidth='xs'>
        <DialogTitle id='form-dialog-title'>{`${competitor.paid === 'No' ? `Agregar pago de ${competitor.player_name}` : `Editar puntos y lugar a ${competitor.player_name}`}`}</DialogTitle>
        <DialogContent>
          {
            competitor.paid === 'No' ? (
              <FormControl component='fieldset'>
                <RadioGroup aria-label='paid' name='paid' value={value} onChange={handleChange}>
                  <FormControlLabel value='paid' control={<Radio />} label='Pagado' />
                </RadioGroup>
              </FormControl>
            ) : (
              <>
                <TextField
                  autoFocus
                  id='name'
                  label='Email Address'
                  type='email'
                  fullWidth
                />
                <TextField
                  autoFocus
                  id='name'
                  label='Email Address'
                  type='email'
                  fullWidth
                />
              </>
            )
          }
        </DialogContent>
        <DialogActions>
          {
            competitor.paid !== 'No' ? (
              <>
                <Button onClick={() => setOpen(false)} color='primary'>
                  Editar
                </Button>
              </>
            ) : null
          }

        </DialogActions>
      </Dialog>
    </div>
  );
};
