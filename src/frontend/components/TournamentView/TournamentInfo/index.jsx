/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SimpleCard from '../Card';

const TournamentInfo = ({ tournament }) => {
  const description = ['id', 'torneo', 'costo', 'comenzó', 'termino', 'juego', 'descripcion', 'organizador', 'centro'];
  return (
    <>
      {
        Object.keys(tournament).map((k, i) => {
          return tournament[`${k}`] !== null || k === 'id' || k === 'center' ?
            <SimpleCard title={description[i]} data={tournament[`${k}`]} key={tournament[`${k}`]} /> : null;
        })
      }
    </>
  );
};

export default TournamentInfo;
