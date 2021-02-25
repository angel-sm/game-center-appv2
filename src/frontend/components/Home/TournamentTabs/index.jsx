/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid, Typography, Tab, Tabs, Box, List } from '@material-ui/core';

import { DataCard } from './components/DataCard';
import TablePlayersEnrolled from './components/TablePlayersEnrolled';

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
  },
  list: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function VerticalTabs(props) {
  const { tournaments } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
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
          tournaments.map((tournament, index) => <Tab key={tournament.id} label={tournament.name} {...a11yProps(index)} />)
        }
      </Tabs>
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
                <TablePlayersEnrolled players={tournament.competitors} />
              </Grid>

            </Grid>
          </TabPanel>
        ))
      }
    </div>
  );
}
