/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import Debtors from '../../components/TournamentView/Debtors';
import TournamentInfo from '../../components/TournamentView/TournamentInfo';
import Paids from '../../components/TournamentView/Paids';
import CloseButton from '../../components/TournamentView/CloseButton';

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
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          {
            props.tournaments.tournaments.filter((tournament) => (tournament.isActive === 0 ? tournament : null)).map((tournament, i) => (
              <Tab label={tournament.tournament} {...a11yProps(i)} key={tournament.id} />
            ))
          }
        </Tabs>
      </AppBar>
      {
        props.tournaments.tournaments.filter((tournament) => (tournament.isActive === 0 ? tournament : null)).map((tournament, i) => (
          <TabPanel value={value} index={i} key={tournament.id}>
            <>
              <TournamentInfo tournamentId={tournament.id} />
              <Debtors tournamentId={tournament.id} />
              <Paids tournamentId={tournament.id} />
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

