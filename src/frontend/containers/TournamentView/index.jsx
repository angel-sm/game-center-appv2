/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import TournamentInfo from '../../components/TournamentView/TournamentInfo';
import PaidsTable from '../../components/TournamentView/PaidsTable';
import CloseButton from '../../components/TournamentView/CloseButton';
import TournamentsDescription from '../../components/TournamentView/TournamentsDescription';

const TournamentView = (props) => {
  console.log(props);
  return (
    <>
      {
        props.tournaments.tournament.isActive === 0 ? (
          <>
            <TournamentInfo tournamentId={props.match.params.id} />
            <PaidsTable tournamentId={props.match.params.id} />
            <CloseButton tournamentId={props.match.params.id} />
          </>
        ) : (
          <>
            <TournamentInfo tournamentId={props.match.params.id} />
            <TournamentsDescription tournamentId={props.match.params.id} />
          </>
        )
      }
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TournamentView);
