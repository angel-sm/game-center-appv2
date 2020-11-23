import styled from 'styled-components';

export const SingInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SingInControl = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
     width: 100%;
     justify-content: center;

   }
`;

export const FormContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
     width: 80%;
  }
`;

export const Title = styled.h3`
  font-size: 2em;
  font-family: 'Muli', sans-serif;
`;

export const Image = styled.img`
  
  @media (max-width: 1650px) {
    max-width: 500px
  }

  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: 768px) {
     display: none;
  }
`;
