/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable use-isnan */
/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button, FormControl, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import TrCompetitors from '../../components/NewTournament/TrCompetitors';
import { TrData } from '../../components/NewTournament/TrData';
import { TrGratifications } from '../../components/NewTournament/TrGratifications';
import { TrSeason } from '../../components/NewTournament/TrSeason';

import useInputValueHandle from '../../hooks/useInputHandler';
import { rqNewTournaments, rqGetTournaments } from '../../redux/actions/tournaments';
import TrSearch from '../../components/NewTournament/TrSearch';
import { Content } from '../../components/shared/Content';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '90%',
  },
}));

const NewTournament = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [errorGratifications, setErrorGratifications] = useState(false);

  const inputValueHandler = useInputValueHandle({
    name: null,
    cost_credit: 0,
    cost_money: 0,
    start: null,
    center: 1,
    description: '',
    gratifications: [],
    players_to_enroll: [],
  });

  const addToEnroll = (player) => {
    inputValueHandler.form['players_to_enroll'] = [...inputValueHandler.form['players_to_enroll'], player];
  };

  const removeToEnroll = (player, exist) => {
    inputValueHandler.form['players_to_enroll'].splice(exist, 1);
  };

  const handleEnrollPlayers = (player) => {
    const exist = inputValueHandler.form['players_to_enroll'].findIndex((enrolled) => enrolled['player_id'] === player['player_id']);
    exist < 0 ? addToEnroll(player) : removeToEnroll(player, exist);
  };

  const handleDeleteGratification = () => {
    inputValueHandler.form['gratifications'].pop();
  };

  const handlerGratification = (gratification, deletePosition) => {
    if (deletePosition) {
      handleDeleteGratification();
    } else {
      if (inputValueHandler.form['gratifications'][`${gratification.place}`] === undefined) {
        inputValueHandler.form['gratifications'] = [...inputValueHandler.form['gratifications'], gratification];
      }
      if (Object.keys(inputValueHandler.form['gratifications'][`${gratification.place}`]).length > 0) {
        inputValueHandler.form['gratifications'][`${gratification.place}`]['gratification_percent'] = gratification.gratification_percent;
      }
    }
  };

  const handlerError = (error, from) => {
    switch (from) {
      case 'gratifications':
        setErrorGratifications(error);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Content>
        <TrData inputValueHandler={inputValueHandler} handlerError={handlerError} />
        <TrSeason inputValueHandler={inputValueHandler} />
      </Content>

      <Content>
        <TrSearch />
        <TrCompetitors handleEnrollPlayers={handleEnrollPlayers} />
      </Content>
      <Content>
        <TrGratifications handlerGratification={handlerGratification} handlerError={handlerError} />
      </Content>
      <Content>
        <FormControl className={classes.formControl}>
          <Button
            onClick={() => {
              console.log(inputValueHandler.form);
              props.rqNewTournaments(inputValueHandler.form); props.rqGetTournaments(); history.push('/');
            }}
            variant='contained'
            color='primary'
            disableElevation
            disabled={errorGratifications}
            endIcon={<CheckCircleOutlineIcon />}
          >
            Agregar torneo
          </Button>
        </FormControl>
      </Content>
    </>
  );
};

const dispatchStateToProps = {
  rqNewTournaments,
  rqGetTournaments,
};

export default connect(null, dispatchStateToProps)(NewTournament);

//
