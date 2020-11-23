import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 'none',
    border: 'none',
    boxShadow: 'none',
  },
}));

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Season = styled.div`
  text-decoration: none;
  width: 100%;
  padding: .5em 0;
  color: #000;
    
    &:hover{
      background: rgba(0,0,0,.2);
      color: #fff
    };
`;
