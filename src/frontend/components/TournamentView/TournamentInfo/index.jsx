/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTournamentRequest } from '../../../actions/tournaments';
import SimpleCard from '../Card';

const TournamentInfo = (props) => {
  useEffect(() => {
    props.getTournamentRequest(props.tournamentId);
  }, [props.tournamentId]);

  const { tournament } = props.tournaments;
  const description = ['id', 'Torneo', 'Costo', 'Organizador', 'Credito Total', 'Fecha de inicio', 'Fecha termino', 'Juego', 'Descripcion'];
  return (
    <>
      {
        Object.keys(tournament).map((k, i) => {
          return <SimpleCard title={description[i]} data={tournament[`${k}`] === null ? '' : tournament[`${k}`]} key={tournament[`${k}`]} />;
        })
      }
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getTournamentRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(TournamentInfo);
