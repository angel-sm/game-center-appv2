/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import Alert from '@material-ui/lab/Alert';

import TrSearch from '../../components/shared/PlayerSearch';
import { Content } from '../../components/shared/Content';
import PlTableResoult from '../../components/Player/PlTableResoult';
import PlForm from '../../components/Player/PlForm';
import PlTableTournamentsHistory from '../../components/Player/PlTableTournamentsHistory';
import PlTableCompetitorHistory from '../../components/Player/PlTableCompetitorHistory';

import { rqGetPlayerHistory } from '../../redux/actions/players';

const Player = (props) => {

  const [playerSelected, setPlayerSelected] = React.useState({
    tournaments: [],
  });
  const [competitorHistory, setCompetitorHistory] = React.useState({});

  const searchHandler = (search) => {
    props.rqGetPlayerHistory(search);
  };

  const hanlderPlayer = (player) => {
    setPlayerSelected(player);
  };

  const hanlderTournament = (toruanentId) => {
    playerSelected.competitor.filter((data) => (data.tournament_id === toruanentId ? setCompetitorHistory(data) : null));
  };

  return (
    <>
      <Content>
        <TrSearch title='Buscar jugador' searchHandler={searchHandler} />
      </Content>
      <Content>
        <PlTableResoult
          hanlderPlayer={hanlderPlayer}
          players={props.players}
        />
      </Content>
      {
        playerSelected.tournaments.length === 0 && Object.keys(playerSelected).length > 2 ? (
          <Content>
            <Alert severity='info'>{`${playerSelected.player_name} no tiene torneos en los que este inscrito`}</Alert>
          </Content>
        ) : null
      }
      {
        playerSelected.tournaments.length > 0 ? (
          <Content>
            <PlTableTournamentsHistory
              hanlderTournament={hanlderTournament}
              tournaments={playerSelected.tournaments}
            />
          </Content>
        ) : null
      }
      {
        Object.keys(competitorHistory).length > 0 && playerSelected.tournaments.length > 0 ? (
          <Content>
            <PlTableCompetitorHistory
              competitorHistory={competitorHistory}
            />
          </Content>
        ) : null
      }
      <Content>
        <PlForm />
      </Content>
    </>
  );
};

const dispatchStateToProps = {
  rqGetPlayerHistory,
};

const mapStateToProps = (state) => {
  return {
    players: state.players.player_histoty || [],
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Player);

