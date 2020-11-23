import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  space: {
    margin: '.5em auto',
    width: '100%',
  },
}));

export const FormContainer = styled.div`
  width: 100%;
  padding: 1em 2em;
  margin: auto;
`;
