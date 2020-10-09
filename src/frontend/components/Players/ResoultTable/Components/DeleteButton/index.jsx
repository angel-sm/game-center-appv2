import React from 'react';
import { connect } from 'react-redux';
import {
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePlayerRequest } from '../../../../../actions/players';

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deletePlayerRequest(props.playerId);
    window.location.href = '/players';
  };
  return (
    <IconButton aria-label='delete' color='secondary'>
      <DeleteIcon onClick={handleDelete} />
    </IconButton>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchState = {
  deletePlayerRequest,
};

export default connect(mapStateToProps, mapDispatchState)(DeleteButton);
