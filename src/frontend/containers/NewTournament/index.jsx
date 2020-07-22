/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Earn from '../../components/NewTournament/Earn';
import DataForm from '../../components/NewTournament/DataForm';
import PlayerList from '../../components/NewTournament/PlayerList';

const stepsForm = (step) => {
  switch (step) {
    case 0:
      return (
        <DataForm />
      );
    case 1:
      return (
        <PlayerList />
      );
    case 2:
      return (
        <Earn />
      );
    default:
      return console.log('no hay nada');
  }
};

const NewTournament = (props) => {
  return (
    <>
      {stepsForm(props.pending.step)}
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(NewTournament);
