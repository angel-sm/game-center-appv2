/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { connect } from 'react-redux';

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, RadioGroup, FormControlLabel, Radio, makeStyles } from '@material-ui/core';

import { rqPay, rqGetTournaments, rqEditPlaceAndPoints } from '../../../../redux/actions/tournaments';
import useInputHandler from '../../../../hooks/useInputHandler';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

const AddPointsButton = (props) => {

  const classes = useStyles();

  const { competitor, tournament } = props;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('female');

  const hanlderInputValue = useInputHandler({
    points: 0,
    place: 0,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
    props.rqPay({ player_id: competitor.id, tournament_id: tournament });
    props.rqGetTournaments();
    window.location.href = '/';
  };

  const handlerEditPlaceAndPoints = () => {
    const place = parseInt(hanlderInputValue.form.place) < 0 ? parseInt(hanlderInputValue.form.place) * -0 : parseInt(hanlderInputValue.form.place);
    const point = parseInt(hanlderInputValue.form.points) < 0 ? parseInt(hanlderInputValue.form.points) * -0 : parseInt(hanlderInputValue.form.points);
    hanlderInputValue.form['tournament_id'] = tournament;
    hanlderInputValue.form['player_id'] = competitor.id;
    hanlderInputValue.form.place = place;
    hanlderInputValue.form.points = point;
    props.rqEditPlaceAndPoints(hanlderInputValue.form);
    props.rqGetTournaments();
    window.location.href = '/';
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={() => setOpen(true)} disabled={competitor.id === undefined} className={classes.margin}>
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
                  id='points'
                  label='Puntos del jugador'
                  type='number'
                  name='points'
                  value={hanlderInputValue.form.points < 0 ? 0 : hanlderInputValue.form.points}
                  fullWidth
                  {...hanlderInputValue}
                />
                <TextField
                  autoFocus
                  id='place'
                  label='Lugar del jugador'
                  type='number'
                  name='place'
                  value={hanlderInputValue.form.place < 0 ? 0 : hanlderInputValue.form.place}
                  {...hanlderInputValue}
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
                <Button
                  onClick={() => handlerEditPlaceAndPoints()}
                  color='primary'
                >
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

const dispatchSateToProps = {
  rqPay,
  rqGetTournaments,
  rqEditPlaceAndPoints,
};

export default connect(null, dispatchSateToProps)(AddPointsButton);
