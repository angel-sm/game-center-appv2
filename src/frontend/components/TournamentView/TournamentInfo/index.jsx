/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getTournamentRequest } from '../../../actions/tournaments';
import { getPrizesRequest } from '../../../actions/prizes';
import SimpleCard from '../Card';

const TournamentInfo = (props) => {
  useEffect(() => {
    props.getTournamentRequest(props.tournamentId);
    props.getPrizesRequest(props.tournamentId);
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
        title='Credito total del torneo'
        data={`$ ${tournament.totalCredit}`}
      />
      <SimpleCard
        title='Ganancia por jugador inscrito'
        data={`$ ${tournament.earn}`}
      />
      <SimpleCard
        title='Costo total del torneo'
        data={`$ ${tournament.cost}`}
      />
      <SimpleCard
        title='Costo por jugador inscrito'
        data={`$ ${tournament.creditPerPlayer}`}
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
        data={tournament.seasonName !== null ? tournament.seasonName : 'Sin temporada'}
      />
    </>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getTournamentRequest,
  getPrizesRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(TournamentInfo);
