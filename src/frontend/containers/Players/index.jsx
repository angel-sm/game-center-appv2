/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchPlayer from '../../components/Players/SearchPlayer';
import AddPlayer from '../../components/Players/AddPlayer';
import ResoultTable from '../../components/Players/ResoultTable';
import TournamentsDescription from '../../components/Players/TournamentsDescription';
import { resetPlayer, getAllPlayersRequest } from '../../actions/players';
import LastPlayers from '../../components/Players/LastPlayers';

const Players = (props) => {

  useEffect(() => {
    props.resetPlayer({});
    props.getAllPlayersRequest();
  }, [props.match.url]);

  return (
    <>
      <LastPlayers />
      <SearchPlayer />
      {Object.keys(props.players.player).length > 0 ? <ResoultTable playerResoult={props.players.player} /> : null}
      {Object.keys(props.players.player).length > 0 ? <TournamentsDescription playerResoult={props.players.player} /> : null}
      <AddPlayer redirect='/players' />
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchSateteToProps = {
  resetPlayer,
  getAllPlayersRequest,
};

export default connect(mapStateToProps, dispatchSateteToProps)(Players);

