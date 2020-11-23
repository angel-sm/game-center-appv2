import { lighten, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useToolbarStyles = makeStyles((theme) => ({
  highlight:
        theme.palette.type === 'light' ?
          {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          } :
          {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
  title: {
    flex: '1 1 100%',
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  space: {
    margin: '0 1em',
  },
}));

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
