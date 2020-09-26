import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '.5em 0',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DescribeCard = styled(Card)`
  &:hover{
    background: rgba(0,0,0,.2);
    color: #fff;
  }
`;

const SimpleCard = ({ title, data }) => {
  const classes = useStyles();

  return (
    <DescribeCard className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {`${title} - ${data}`}
        </Typography>
      </CardContent>
    </DescribeCard>
  );
};

export default SimpleCard;

