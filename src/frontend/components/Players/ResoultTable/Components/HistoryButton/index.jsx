/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  List,
  Slide,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import HistoryIcon from '@material-ui/icons/History';
import { getHistoryRequest } from '../../../../../actions/sales';
import HistoryList from './components/HistoryList';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />;
});

function HistoryButton(props) {
  const { playerId, player } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    props.getHistoryRequest(playerId);
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line react/destructuring-assignment
  const { historySales } = props.sales;

  return (
    <div>
      <IconButton aria-label='delete' color='primary'>
        <HistoryIcon onClick={handleClickOpen} />
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              {`${player}, tus compras`}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <HistoryList history={historySales} />
        </List>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchState = {
  getHistoryRequest,
};

export default connect(mapStateToProps, mapDispatchState)(HistoryButton);
