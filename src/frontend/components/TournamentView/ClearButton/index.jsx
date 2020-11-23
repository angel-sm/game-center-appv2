/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import { connect } from 'react-redux';
import { closeTournamentRequest } from '../../../actions/tournaments';

const ButtonContainer = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

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
    <ButtonContainer>
      <IconButton aria-label='delete' color='primary' onClick={handleClear}>
        <MoveToInboxIcon fontSize='large' />
      </IconButton>
    </ButtonContainer>
  );
});
