/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const PositionSide = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column !important;
  }
`;

export default PositionSide;
