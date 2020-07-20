import styled from 'styled-components';

const Bar = styled.div`
  width: ${(props) => (props.error !== '' ? '100%' : '0%')};
  transition: all ease .5s;
  padding: .8em 0;
  background: #d32f2f;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 5px rgba(0,0,0,.1);
  font-family: 'Muli', sans-serif;
`;

export default Bar;
