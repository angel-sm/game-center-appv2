import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const usePaginationStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(3),
  },
}));

const useAvatarStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
}));

const useTableStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const AvatarControllContainer = styled.div`
  display:flex;
  align-items: center;
`;

export {
  AvatarControllContainer,
  usePaginationStyles,
  useAvatarStyles,
  useTableStyles,
};
