/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import TournamentInfo from '../../components/TournamentView/TournamentInfo';
import Paids from '../../components/TournamentView/Paids';
import CloseButton from '../../components/TournamentView/CloseButton';

const TournamentView = (props) => {
  return (
    <>
      <TournamentInfo tournamentId={props.match.params.id} />
      <Paids tournamentId={props.match.params.id} />
      <CloseButton tournamentId={props.match.params.id} />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TournamentView);
