/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core';

import { rqGetTournaments } from '../../redux/actions/tournaments';
import Dashboard from '../../components/Home/TournamentTabs';

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.tournaments,
  };
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const dispatchStateToProps = {
  rqGetTournaments,
};
const Home = (props) => {
  const classes = useStyles();

  const [findedTournaments, setFindedTournaments] = useState([]);

  useEffect(() => {
    if (props.tournaments === undefined) {
      props.rqGetTournaments();
    }
  }, []);

  useEffect(() => {
    if (props.tournaments) {
      setFindedTournaments(props.tournaments || []);
    }
  }, [props.tournaments]);

  return (
    <>
      <Dashboard tournaments={findedTournaments} />
    </>
  );
};
export default connect(mapStateToProps, dispatchStateToProps)(Home);

