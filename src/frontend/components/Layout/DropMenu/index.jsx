/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';
import { getRequest } from '../../../actions/tournaments';
import useStyles from './DropMenu.styles';

const MenuDrop = (props) => {
  const { section, center, search } = props;
  const classes = useStyles();

  useEffect(() => {
    props.getRequest(center, search);
  }, []);

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {section}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {
          props.tournaments.tournaments.map((t) => {
            return (
              <Link to={`/tournament/${t.id}`}>
                {t.tournament}
              </Link>
            );
          })
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const mapSatateToProps = (state) => state;

const dispatchStateToProps = {
  getRequest,
};

export default connect(mapSatateToProps, dispatchStateToProps)(MenuDrop);
