/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  makeStyles,
  FormControl,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(1),
  },
}));

export const TrSeason = () => {
  const classes = useStyles();

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
              <InputLabel id='game'>Juego</InputLabel>
              <Select
                labelId='game'
                id='game'
                value={10}
                onChange={() => { }}
                label='Juego'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} lg={8} variant='standard'>
            <FormControl fullWidth variant='outlined' className={classes.input}>
              <InputLabel id='season'>Temporada</InputLabel>
              <Select
                labelId='season'
                id='season'
                value={10}
                onChange={() => { }}
                label='Temporada'
                fullWidth
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
