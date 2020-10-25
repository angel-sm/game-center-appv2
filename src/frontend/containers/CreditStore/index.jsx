/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Credit from '../../components/CreditStore/Credit';

const CreditStore = (props) => {

  const getParameters = (str = '') => {
    const queryValues = str.replace('?', '').replace(/&/g, ',').replace(/=/g, ',').split(',');
    return {
      player: queryValues[1],
      credits: queryValues[3],
      from: queryValues[5],
    };
  };

  return (
    <Credit playerData={getParameters(props.location.search)} />
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(CreditStore);
