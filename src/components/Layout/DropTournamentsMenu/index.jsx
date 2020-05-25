import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon, Divider } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyles, useDetailsStyles, useSpaceStyles } from './DropTournamentsMenu-styles';

const TournamentMenu = ({ section, data }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {section}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={useDetailsStyles().root}>
        <List>
          {data.map((option) => (
            <Link
              to={`/tournament/${option.id}`}
              style={{ textDecoration: 'none', color: '#4e4e4e' }}
              key={option.id}
            >
              <Divider />
              <ListItem button key={option.option} className={useSpaceStyles().root}>
                <ListItemText primary={option.tournament} />
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
              </ListItem>
            </Link>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TournamentMenu;
