import styled from 'styled-components';

export const SingInContainer = styled.div`
  widows: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

   @media (max-width: 768px) {
     width: 80%;
   }
`;

export const Title = styled.h3`
  font-size: 2em;
  font-family: 'Muli', sans-serif;
`;
