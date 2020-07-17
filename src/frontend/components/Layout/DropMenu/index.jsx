import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';
import useStyles from './DropMenu.styles';

const MenuDrop = ({ section, data }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {section}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {
          data.map((t) => {
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

export default MenuDrop;
