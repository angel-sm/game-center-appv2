/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Content } from '../../components/shared/Content';
import TrLastTournamentsTable from '../../components/Tournament/TrLastTournamentsTable';
import TrSearchTournament from '../../components/Tournament/TrSearchTournament';

import { rqGetTournaments } from '../../redux/actions/tournaments';
import TrTableResult from '../../components/Tournament/TrTableResult';
import TrDetailTournamentTable from '../../components/Tournament/TrDetailTournamentTable';

const Tournament = (props) => {

  const [lastTournaments, setLastTournaments] = useState([]);
  const [tourbanebtSearchResoult, setTourbanebtSearchResoult] = useState([]);
  const [tournamentDetail, setTournamentDetail] = useState([]);

  const [load, setLoad] = useState(false);

  useEffect(() => {

    if (props.tournaments !== undefined) {
      setLastTournaments(props.tournaments);
      setTimeout(() => setLoad(false), 500);
    } else {
      setLoad(true);
      props.rqGetTournaments();
    }
  }, [props.tournaments]);

  const searchHandler = (tournament) => {
    const byname = props.tournaments.filter((t) => (t.name.includes(tournament.search) ? t : null));
    const bygame = props.tournaments.filter((t) => (t.game_name.includes(tournament.search) ? t : null));
    const byseason = props.tournaments.filter((t) => (t.season_name.includes(tournament.search) ? t : null));
    const totalResult = [...bygame, ...byname, ...byseason];
    const result = Array.from(new Set(totalResult.map((a) => a.id))).map((id) => { return totalResult.find((a) => a.id === id); });
    setTourbanebtSearchResoult([...result]);
  };

  const getTournamentSelected = ({ row }) => {
    setTournamentDetail([...row.competitors]);
  };

  console.log(tournamentDetail);

  return (
    <>
      <Content>
        {
          load ? <CircularProgress /> : <TrLastTournamentsTable lastTournaments={lastTournaments} />
        }
      </Content>
      <Content>
        <TrSearchTournament title='Buscar Torneo' searchHandler={searchHandler} />
      </Content>
      {
        tourbanebtSearchResoult.length > 0 ? (
          <Content>
            <TrTableResult result={tourbanebtSearchResoult} getTournamentSelected={getTournamentSelected} />
          </Content>
        ) : null
      }
      {
        tournamentDetail.length > 0 ? (
          <Content>
            <TrDetailTournamentTable deatils={tournamentDetail} />
          </Content>
        ) : null
      }
    </>

  );
};

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.tournaments,
  };
};

const dispatchStateToProps = {
  rqGetTournaments,
};

export default connect(mapStateToProps, dispatchStateToProps)(Tournament);
