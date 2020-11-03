/* eslint-disable import/prefer-default-export */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { closeTournamentRequest } from '../../../actions/tournaments';

const mapStateToProps = (state) => state;
const dispatchStateToProps = {
  closeTournamentRequest,
};

export const ClearButton = connect(
  mapStateToProps,
  dispatchStateToProps,
)((props) => {

  const { tournamentId } = props;

  const handleClear = () => {
    props.closeTournamentRequest(tournamentId, { isActive: 1 });
    window.location.href = '/';
  };

  return (
    <IconButton aria-label='delete' color='secondary' onClick={handleClear}>
      <CloseIcon />
    </IconButton>
  );
});
