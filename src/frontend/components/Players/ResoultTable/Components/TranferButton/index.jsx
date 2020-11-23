import React from 'react';
import { connect } from 'react-redux';
import {
  IconButton,
} from '@material-ui/core';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const TransferButton = (props) => {

  return (
    <IconButton aria-label='delete' color='primary'>
      <CompareArrowsIcon />
    </IconButton>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchState = {
};

export default connect(mapStateToProps, mapDispatchState)(TransferButton);
