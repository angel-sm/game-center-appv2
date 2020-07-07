import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  StepContent,
  Paper,
  Typography,
} from '@material-ui/core';

import StepOne from '../StepOne';
import StepTwo from '../StepTwo';

import useStyles from './Stepper.styles';
import './styles.scss';

function getSteps() {
  return ['Nuevo jugador', 'Datos del jugador'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <StepOne />
      );
    case 1:
      return (
        <StepTwo />
      );
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
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
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                <div className='StepController'>
                  {
                    getStepContent(index)
                  }
                </div>
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Terminar registro' : 'Siguiente'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Agregar otro jugador
          </Button>
        </Paper>
      )}
    </div>
  );
}
