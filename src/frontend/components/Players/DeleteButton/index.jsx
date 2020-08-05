import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { deletePlayerRequest } from '../../../actions/players';

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deletePlayerRequest(props.playerId);
    window.location.href = '/players';
  };
  return (
    <Button color='secondary' disableElevation onClick={handleDelete}>
      Eliminar jugador
    </Button>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchState = {
  deletePlayerRequest,
};

export default connect(mapStateToProps, mapDispatchState)(DeleteButton);
