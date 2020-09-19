import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { setPointsCompetitorRequest } from '../../../actions/competitors';

const AddPoints = (props) => {
  const { playerId, player } = props;
  const [open, setOpen] = React.useState(false);
  const [points, setPoints] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetPoints = () => {
    props.setPointsCompetitorRequest(playerId, points);
    window.location.href = '/';
  };

  return (
    <div>
      <Button size='small' variant='outlined' onClick={handleClickOpen}>
        Agregar puntos
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Agregar puntos a ${player}`}
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            type='number'
            fullWidth
            min={0}
            value={points < 0 ? points * -1 : points}
            onChange={(element) => { setPoints(element.target.value); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={handleSetPoints} color='primary'>
            Agregar puntos
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  setPointsCompetitorRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(AddPoints);
