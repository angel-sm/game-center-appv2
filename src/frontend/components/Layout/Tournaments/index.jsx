/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRequest } from '../../../actions/tournaments';
import useStyles from './DropMenu.styles';

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SetLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  padding: .5em 0;
  color: #000;
  
  &:hover{
    background: rgba(0,0,0,.2);
    color: #fff
  }
`;

const Tournaments = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getRequest(props.center, 'tournaments');
  }, []);

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <h3>Tourneos</h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <LinkContainer>
          {
            props.tournaments.tournaments.map((t) => {
              return (
                <SetLink to={`/tournaments/${t.id}`} key={t.id}>
                  {t.tournament}
                </SetLink>
              );
            })
          }
        </LinkContainer>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const mapSatateToProps = (state) => state;

const dispatchStateToProps = {
  getRequest,
};

export default connect(mapSatateToProps, dispatchStateToProps)(Tournaments);