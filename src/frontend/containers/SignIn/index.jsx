/* eslint-disable import/extensions */
import React from 'react';
import SignInForm from '../../components/SignIn/SignInForm';
import {
  FormContainer,
  SingInContainer,
  Title,
} from './styles';

const SignIn = () => {
  return (
    <SingInContainer>
      <FormContainer>
        <Title>Inicia sesion</Title>
        <SignInForm />
      </FormContainer>
    </SingInContainer>
  );
};

export default SignIn;
