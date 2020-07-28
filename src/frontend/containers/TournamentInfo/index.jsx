/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

const TournamentInfo = (props) => {
  const getTournament = () => {
    props.tournaments.tournaments.filter((t) => console.log(t));
  };

  return (
    <h1>{getTournament()}</h1>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TournamentInfo);
