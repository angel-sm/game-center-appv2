import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useButtonStyles = makeStyles((theme) => ({
  root: {
    margin: '.3em',
  },
}));

const ButtonsContainer = styled.div`
  display:flex;
  flex-direction:row;
`;

const CompetitorsContainer = styled(ButtonsContainer)`
  align-items: center;
  justify-content: space-between;
`;

export {
  ButtonsContainer,
  CompetitorsContainer,
  useButtonStyles,
};
