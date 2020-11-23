import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1em auto',
    maxWidth: '90%',
  },
  child: {
    width: '100%',
    margin: '.5em 0',
  },
}));

export const Form = styled.form`
  width: 100%;
  padding: 1em 2em;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
