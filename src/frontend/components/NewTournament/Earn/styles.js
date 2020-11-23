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
  space: {
    margin: '0 1em',
  },
}));

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  @media(max-width: 768px) {
    width: 100%;
    margin: 1em 0;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 1em 2em;
  margin: auto;
`;
