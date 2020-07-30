/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import moment from 'moment';
import { closeTournamentRequest } from '../../../actions/tournaments';

const CloseButton = (props) => {

  const hanldeClose = () => {
    props.closeTournamentRequest(props.tournamentId, { end: moment(new Date()).utc(true).format('YYYY-MM-DD') });
  };

  const isPaid = () => {
    const debtor = props.tournaments.competitors.filter((c) => (c.paid !== 'paid'));
    if (debtor.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <>
      {
        props.tournaments.tournament.end === null ? (
          isPaid() ? <Button variant='contained' color='primary' disableElevation onClick={hanldeClose}>Cerrar torneo</Button> :
            (<Button variant='contained' color='primary' disableElevation disabled>Cerrar torneo</Button>)
        ) : null
      }
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  closeTournamentRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(CloseButton);