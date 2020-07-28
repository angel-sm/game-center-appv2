/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import TournamentInfo from '../../components/TournamentView/TournamentInfo';
import Competitors from '../../components/TournamentView/Competitors';

const TournamentView = (props) => {
  const getTournament = () => {
    return props.tournaments.tournaments.filter((t) => (t.id === props.match.params.id ? [t] : null));
  };
  const [tournament] = getTournament();
  return (
    <>
      <TournamentInfo tournament={tournament} />
      <Competitors tournamentId={tournament.id} />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TournamentView);
