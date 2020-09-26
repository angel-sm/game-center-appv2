/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import SearchPlayer from '../../components/Players/SearchPlayer';
import SimpleCard from '../../components/Players/Card';
import EditButton from '../../components/Players/EditButton';
import DeleteButton from '../../components/Players/DeleteButton';
import AddPlayerButton from '../../components/Players/AddPlayerButton';
import CreditButton from '../../components/Players/CreditButton';

const Players = (props) => {
  const description = ['id', 'Nombre', 'Puntos', ' Jugador'];

  const setButtons = (credit, nickname) => {
    return (
      <>
        <EditButton player={props.players.player} />
        <DeleteButton playerId={props.players.player.id} />
        {credit > 0 ? <CreditButton disabled={false} player={nickname} maxOfCredit={credit} /> : <CreditButton disabled={true} player={nickname} />}
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
        setButtons(props.players.player.credit, props.players.player.nickname) :
        null}
      <AddPlayerButton redirect='/players' />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Players);

