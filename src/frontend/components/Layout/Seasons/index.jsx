/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getSeasonsRequest } from '../../../actions/seasons';
import {
  LinkContainer,
  Season,
  useStyles,
} from './styles';

const Seasons = (props) => {
  const classes = useStyles();

  const { seasons } = props.seasons;

  useEffect(() => {
    props.getSeasonsRequest(props.center, 'seasons');
  }, []);

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <h3>Temporadas</h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <LinkContainer>
          {
            seasons.map((season) => <Season key={season.id}>{season.season}</Season>)
          }
        </LinkContainer>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const mapSatateToProps = (state) => state;

const dispatchStateToProps = {
  getSeasonsRequest,
};

export default connect(mapSatateToProps, dispatchStateToProps)(Seasons);
