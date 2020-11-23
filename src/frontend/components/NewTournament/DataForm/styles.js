import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  chaild: {
    width: '100%',
    margin: '.5em auto',
  },
  root: {
    width: '100%',
    margin: 'auto',
  },
}));

export const FormContainer = styled.div`
  width: 100%;
  padding: 1em 2em;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
