/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import SearchPlayer from '../../components/Players/SearchPlayer';
import SimpleCard from '../../components/Players/Card';
import EditButton from '../../components/Players/EditButton';
import DeleteButton from '../../components/Players/DeleteButton';
import AddPlayerButton from '../../components/Players/AddPlayerButton';

const Players = (props) => {
  const description = ['id', 'Nombre', 'Puntos', ' Jugador'];

  const setButtons = () => {
    return (
      <>
        <EditButton player={props.players.player} />
        <DeleteButton playerId={props.players.player.id} />
        <Button color='primary' disableElevation type='submit' href={`/credit/player/${props.players.player.id}`}>Usar credito</Button>
      </>
    );
  };

  return (
    <>
      <SearchPlayer />
      {Object.keys(props.players.player).length > 0 ?
        Object.keys(props.players.player).map((k, i) => {
          return (
            <SimpleCard title={description[i]} data={props.players.player[`${k}`]} key={k} />
          );
        }) : null}
      {Object.keys(props.players.player).length > 0 ?
        setButtons() :
        null}
      <AddPlayerButton />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Players);

