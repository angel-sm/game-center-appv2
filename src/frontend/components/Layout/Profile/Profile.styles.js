import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: '.5em',
  },
}));

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 1em;
  margin: 0;
  text-align:center
`;

export { Container, useStyles };

