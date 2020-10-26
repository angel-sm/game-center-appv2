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
import { searchPlayerRequest } from '../../../actions/players';

const Credit = (props) => {
  const { from } = props.playerData;
  const [checked, setChecked] = React.useState(from === 'true');
  const [player, setPlayer] = useState(checked ? props.players.player : {});

  const handlePlayerSelected = (e) => setPlayer(e);

  const handleRefreshPlayerSearch = () => {
    props.searchPlayerRequest(player.nickname);
  };

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
      <ProductList player={player || {}} handleRefreshPlayerSearch={handleRefreshPlayerSearch} />
    </div>
  );
};

const mapStateToProps = (state) => state;

const dispatchStateToProps = {
  searchPlayerRequest,
};

export default connect(mapStateToProps, dispatchStateToProps)(Credit);
