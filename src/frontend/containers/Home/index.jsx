/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';
import Debtors from '../../components/TournamentView/DebtorsTable';
import TournamentInfo from '../../components/TournamentView/TournamentInfo';
import Paids from '../../components/TournamentView/PaidsTable';
import CloseButton from '../../components/TournamentView/CloseButton';
import { ClearButton } from '../../components/TournamentView/ClearButton';
import TournamentsDescription from '../../components/TournamentView/TournamentsDescription';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { tournaments } = props.tournaments;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent'>
        <Tabs
          indicatorColor='primary'
          value={value}
          onChange={handleChange}
          scrollButtons='auto'
          textColor='primary'
        >
          {
            tournaments.filter((tournament) => (tournament.isActive === 0 ? tournament : null)).map((tournament, i) => (
              <Tab label={tournament.tournament} {...a11yProps(i)} key={tournament.id} />
            ))
          }
        </Tabs>
      </AppBar>
      {
        tournaments.filter((tournament) => (tournament.isActive === 0 ? tournament : null)).map((tournament, i) => (
          <TabPanel value={value} index={i} key={tournament.id}>
            <>
              {
                tournament.end !== null ? <ClearButton tournamentId={tournament.id} /> : null
              }
              <TournamentInfo tournamentId={tournament.id} />
              <Debtors tournamentId={tournament.id} />
              {
                tournament.end !== null ? <TournamentsDescription tournamentId={tournament.id} /> : <Paids tournamentId={tournament.id} />
              }
              <CloseButton tournamentId={tournament.id} />
            </>
          </TabPanel>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Home);
