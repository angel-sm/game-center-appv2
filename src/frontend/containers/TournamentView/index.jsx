/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import TournamentInfo from '../../components/TournamentView/TournamentInfo';
import Debtors from '../../components/TournamentView/Debtors';
import Paids from '../../components/TournamentView/Paids';

const TournamentView = (props) => {
  return (
    <>
      <TournamentInfo tournamentId={props.match.params.id} />
      <Debtors tournamentId={props.match.params.id} />
      <Paids tournamentId={props.match.params.id} />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TournamentView);
