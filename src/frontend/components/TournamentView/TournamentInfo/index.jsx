/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { getTournamentRequest } from '../../../actions/tournaments';
import { getPrizesRequest } from '../../../actions/prizes';
import SimpleCard from '../../shared/CardInfo';

const CardsComtainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

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
    <CardsComtainer>
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
        title='Costo'
        data={`$ ${tournament.earn}`}
      />
      <SimpleCard
        title='Costo total del torneo'
        data={`$ ${tournament.cost}`}
      />
      <SimpleCard
        title='Credito'
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
    </CardsComtainer>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  getTournamentRequest,
  getPrizesRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(TournamentInfo);
