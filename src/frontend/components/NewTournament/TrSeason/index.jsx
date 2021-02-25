/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  makeStyles,
  FormControl,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(1),
  },
}));

const games = [
  { id: 1, name: 'Chess' },
  { id: 2, name: 'Magic' },
  { id: 3, name: 'One' },
  { id: 4, name: 'Yugioh' },
  { id: 5, name: 'PokemonTCC' },
];

const seasons = [
  { id: 1, name: 'Temporada 1', game_id: 1 },
  { id: 2, name: 'Temporada 2', game_id: 2 },
  { id: 3, name: 'Temporada 3', game_id: 3 },
  { id: 4, name: 'Temporada 4', game_id: 4 },
  { id: 5, name: 'Temporada 5', game_id: 5 },
];

export const TrSeason = ({ inputValueHandler, handlerSeasonSelect }) => {
  const classes = useStyles();

  const [gameName, setGameName] = useState('');

  const getGameName = () => {
    const [game] = games.filter((game) => (game.id === inputValueHandler.form.season ? game : null));
    setGameName(game.name);
  };

  useEffect(() => {
    if (inputValueHandler.form.season !== null) {
      getGameName();
      handlerSeasonSelect(inputValueHandler.form.season);
    }
  }, [inputValueHandler.form.season]);

  return (
    <>
      <Grid item xs={12} sm={12} lg={8} variant='standard'>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={3}
          wrap='nowrap'
        >
          <Grid item xs={12} sm={12} lg={8} variant='standard'>
            <FormControl fullWidth variant='outlined' className={classes.input}>
              <InputLabel id='season'>Temporada</InputLabel>
              <Select
                name='season'
                labelId='season'
                id='season'
                value={inputValueHandler.form.season}
                label='Temporada'
                fullWidth
                {...inputValueHandler}
              >
                <MenuItem value={null}>
                  <em>Ningunda</em>
                </MenuItem>
                {
                  seasons.map((season) => <MenuItem key={season.id} value={season.id}>{season.name}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} lg={8} variant='standard'>
            <FormControl fullWidth variant='outlined' className={classes.input}>
              <InputLabel id='game'>Juego</InputLabel>
              <Select
                name='game'
                labelId='game'
                id='game'
                disabled={inputValueHandler.form.season !== null}
                value={inputValueHandler.form.game}
                label='Juego'
                {...inputValueHandler}
              >
                {
                  games.map((game) => <MenuItem key={game.id} value={game.id}>{game.name}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      {
        inputValueHandler.form.season !== null ? (
          <Grid item xs={12} sm={12} lg={8} variant='standard'>
            <FormControl fullWidth variant='outlined' className={classes.input}>
              <Alert severity='info'>
                {
                  `${gameName} es el juego por default de la temporada ${inputValueHandler.form.season}`
                }
              </Alert>
            </FormControl>
          </Grid>
        ) : null
      }
    </>
  );
};
