/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import SearchPlayer from '../../components/Players/SearchPlayer';
import AddPlayerButton from '../../components/Players/AddPlayerButton';
import ResoultTable from '../../components/Players/ResoultTable';
import TournamentsDescription from '../../components/Players/TournamentsDescription';

const Players = (props) => {

  return (
    <>
      <SearchPlayer />
      {Object.keys(props.players.player).length > 0 ? <ResoultTable playerResoult={props.players.player} /> : null}
      {Object.keys(props.players.player).length > 0 ? <TournamentsDescription playerResoult={props.players.player} /> : null}
      <AddPlayerButton redirect='/players' />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Players);

