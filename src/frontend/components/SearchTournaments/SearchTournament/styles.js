import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  chaild: {
    width: '100%',
    margin: '.5em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    margin: '1em 0',
  },
  spaceSides: {
    margin: '0 .5em',
  },
}));

export const FormContainer = styled.div`
  width: 90%;
  padding: 1em 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  padding: 1em;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;
