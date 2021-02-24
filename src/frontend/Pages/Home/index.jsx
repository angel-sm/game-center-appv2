/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

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

  const [load, setLoad] = useState(true);
  const [findedTournaments, setFindedTournaments] = useState([]);

  useEffect(() => {
    if (props.tournaments === undefined) {
      props.rqGetTournaments();
    }
  }, []);

  console.log(props);
  useEffect(() => {
    if (props.tournaments) {
      setFindedTournaments(props.tournaments || []);
      setLoad(false);
    }
  }, [props.tournaments]);

  return (
    <>
      {
        load ? (
          <Backdrop className={classes.backdrop} open={load}>
            <CircularProgress color='inherit' />
          </Backdrop>
        ) : <Dashboard tournaments={findedTournaments} />
      }
    </>
  );
};
export default connect(mapStateToProps, dispatchStateToProps)(Home);

