import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import TournamentForm from '../../components/NewTournament/TournamentForm';
import SearchPlayerBar from '../../components/NewTournament/SearchPlayerBar';
import CompetitorsTable from '../../components/NewTournament/CompetitorsTable';

import { useStyles, QontoConnector, useQontoStepIconStyles } from './NewTorurnament-styles';

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ?
        <Check className={classes.completed} /> :
        <div className={classes.circle} />}
    </div>
  );
}

function getSteps() {
  return ['Torneo', 'Competidores', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <TournamentForm />
      );
    case 1:
      return (
        <>
          <SearchPlayerBar />
          <CompetitorsTable />
        </>
      );
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Grid item lg={6} xs={12}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={QontoStepIcon}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item lg={6} xs={12}>
          <div>
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                {
                  activeStep === steps.length - 1 ? (
                    <Button
                      onClick={handleReset}
                      className={classes.button}
                      variant='outlined'
                    >
                      Inicio
                    </Button>
                  ) :
                    (
                      <Button
                        variant='outlined'
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Siguiente
                      </Button>
                    )
                }
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
