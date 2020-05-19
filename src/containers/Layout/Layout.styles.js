import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div`
  width: 20%;
  height: 100vh;
`;

const Option = styled.li`
  width: 100%;
  padding: 1em;
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
  background: #e8e8e8;
  list-style: none;
  color: #4c4c4c;

  &:hover{
    background: darkslategrey;
  }
`;

export {
  Option,
  Menu,
  MainContainer,
};
