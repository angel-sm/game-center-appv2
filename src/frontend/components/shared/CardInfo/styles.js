import styled from 'styled-components';

export const Card = styled.div`
  width: 20%;
  border: 1px solid rgba(0,0,0,.1);
  margin: .5em;

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 768px) {
     width: 100%;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: .5em;
  position: relative;
  font-weight: bold;

  &::before{
    content: "";
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 1.5em .5em;
  position: relative;

  &::before{
    content: "";
    background: #ececec;
    position: absolute;
    top: 0;
    left: auto;
    width: 30%;
    height: 1px;
  }
`;

