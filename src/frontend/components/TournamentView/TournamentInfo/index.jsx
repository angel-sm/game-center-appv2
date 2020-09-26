/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getTournamentRequest } from '../../../actions/tournaments';
import SimpleCard from '../Card';

const TournamentInfo = (props) => {
  useEffect(() => {
    props.getTournamentRequest(props.tournamentId);
  }, [props.tournamentId]);

  const resetDate = (date) => {
    return moment(date).locale('e').format('YYYY-MM-DD');
  };

  const { tournament } = props.tournaments;
  return (
    <>
      <SimpleCard
        title='ID'
        data={tournament.id}
      />
      <SimpleCard
        title='Torneo'
        data={tournament.tournament}
      />
      <SimpleCard
        title='Costo'
        data={tournament.cost}
      />
      <SimpleCard
        title='Fecha de inicio'
        data={resetDate(tournament.start)}
      />
      <SimpleCard
        title='Fecha de cierre'
        data={tournament.end !== null ? resetDate(tournament.start) : 'Activo'}
      />
      <SimpleCard
        title='Credito'
        data={tournament.credit}
      />
      <SimpleCard
        title='Juego'
        data={tournament.game}
      />
      <SimpleCard
        title='Descripcion del torneo'
        data={tournament.description}
      />
      <SimpleCard
        title='Organizador'
        data={tournament.organizer}
      />
      <SimpleCard
        title='Temporada'
        data={tournament.seasonName}
      />
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getTournamentRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(TournamentInfo);
