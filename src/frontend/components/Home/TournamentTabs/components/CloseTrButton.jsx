/* eslint-disable import/prefer-default-export */
import React from 'react';
import { connect } from 'react-redux';

import { Button, makeStyles } from '@material-ui/core';

import { rqCloseTournament, rqGetTournaments } from '../../../../redux/actions/tournaments';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

const CloseTrButton = (props) => {
  const classes = useStyles();

  const { players, tournament } = props;

  const closeTournamentHandler = () => {
    props.rqCloseTournament({
      tournament_id: tournament,
      winners: [...players],
    });
    props.rqGetTournaments();
    window.location.href = '/';
  };

  return (
    <Button variant='contained' color='primary' className={classes.margin} onClick={() => closeTournamentHandler()}>
      Cerrar torneo
    </Button>
  );
};

const dispatchSatateToProps = {
  rqCloseTournament,
  rqGetTournaments,
};

export default connect(null, dispatchSatateToProps)(CloseTrButton);
