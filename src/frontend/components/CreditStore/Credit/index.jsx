/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

import { connect } from 'react-redux';
import SearchPlayer from '../../Players/SearchPlayer';
import TableResult from '../TableResult';
import ProductList from '../ProductsList';

const Credit = (props) => {
  const { from } = props.playerData;
  const [checked, setChecked] = React.useState(from === 'true');
  const [player, setPlayer] = useState(checked ? props.players.player : {});

  const handlePlayerSelected = (e) => setPlayer(e);
  console.log(player);
  return (
    <div>
      <FormControlLabel
        control={<Checkbox color='primary' onChange={(event) => setChecked(event.target.checked)} checked={checked} />}
        label='Credito'
        labelPlacement='start'
      />
      {
        checked ? (
          <>
            <SearchPlayer />
            {
              Object.keys(props.players.player).length > 0 ?
                <TableResult playerResoult={props.players.player} isFromPlayer={from} handlePlayerSelected={handlePlayerSelected} /> :
                null
            }
          </>
        ) : null
      }
      {/* List of products to change*/}
      <ProductList player={player || {}} />
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Credit);
