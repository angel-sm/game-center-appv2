/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import CloseIcon from '@material-ui/icons/Close';
import TransferPlayersList from './components/TransferModal';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  list: {
    width: '90%',
    margin: 'auto',
  },
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />;
});

const TransferButton = (props) => {
  const { name, nickname } = props.player;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton aria-label='delete' color='primary' onClick={handleClickOpen}>
        <CompareArrowsIcon />
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              {`${name}-${nickname}, tranferir a`}
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={classes.list}>
          <TransferPlayersList players={props.players} player={props.player} />
        </List>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchState = {
};

export default connect(mapStateToProps, mapDispatchState)(TransferButton);
