/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Tab, Tabs, Box, List } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { DataCard } from './components/DataCard';
import TablePlayersEnrolled from './components/TablePlayersEnrolled';
import AddPointsButton from './components/AddPointsButton';
import CloseTrButton from './components/CloseTrButton';
import { RemoveButton } from './components/RemoveButton';

const AntTabs = withStyles({
  root: {
  },
  indicator: {
    backgroundColor: '#3f50b5',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(3),
    borderBottom: '1px solid #e8e8e8',
    '&:hover': {
      color: '#3f50b5',
      opacity: 1,
    },
    '&$selected': {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: '#3f50b5',
    },
    '&:focus': {
      color: '#fff',
      backgroundColor: '#3f50b5',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    maxHeight: '100vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0px',
    },
  },
  list: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function VerticalTabs(props) {
  const { tournaments } = props;
  const [playerToEdit, setPlayerToEdit] = useState({});

  const hanlderPlayer = (player) => {
    setPlayerToEdit(player);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(typeof document !== 'undefined' ? parseInt(document.cookie.split('=')[1]) : 0);

  const handleChange = (event, newValue) => {
    typeof document !== 'undefined' ? document.cookie = `tournament_id=${newValue}` : handleChange(null, newValue);
    setValue(parseInt(document.cookie.split('=')[1]));
  };

  return (
    <div className={classes.root}>
      <AntTabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        {
          tournaments.map((tournament, index) => <AntTab key={tournament.id} label={tournament.name} {...a11yProps(index)} />)
        }
      </AntTabs>
      {
        tournaments.map((tournament, index) => (
          <TabPanel value={value} index={index} key={tournament.id}>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='flex-start'
            >
              <Grid item xs={12} sm={12} lg={3} variant='standard'>
                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <List className={classes.list}>
                    <DataCard tournament={tournament} />
                  </List>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} lg={8} variant='standard'>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
                >
                  <Grid item xs={12} sm={12} lg={12} variant='standard'>
                    <TablePlayersEnrolled players={tournament.competitors} hanlderPlayer={hanlderPlayer} />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={12} variant='standard'>
                    <Grid
                      container
                      direction='row'
                      justify='flex-start'
                      alignItems='center'
                    >
                      <AddPointsButton competitor={playerToEdit} tournament={tournament.id} />
                      {
                        tournament.competitors.findIndex((comp) => comp.paid === 'No') !== -1 ? null : tournament.end !== null ? null : <CloseTrButton players={tournament.competitors} tournament={tournament.id} />
                      }
                      {
                        tournament.end !== null ? <RemoveButton /> : null
                      }
                    </Grid>
                  </Grid>

                </Grid>

              </Grid>

            </Grid>
          </TabPanel>
        ))
      }
    </div>
  );
}
