import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1em auto',
    maxWidth: '90%',
  },
}));

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1em 2em;
  align-items: center;
`;

export const Space = styled.span`
  margin: 0 1em;
`;
