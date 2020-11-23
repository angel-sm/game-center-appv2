/* eslint-disable import/extensions */
import React from 'react';
import SignInForm from '../../components/SignIn/SignInForm';
import {
  FormContainer,
  SingInContainer,
  Title,
  Image,
  SingInControl,
} from './styles';

const SignIn = () => {
  return (
    <SingInContainer>
      <SingInControl>
        <Image src='https://res.cloudinary.com/saponestore/image/upload/v1605900695/game-center/undraw_video_game_night_8h8m_vceuwj.svg' />
        <FormContainer>
          <Title>Inicia sesion</Title>
          <SignInForm />
        </FormContainer>
      </SingInControl>
    </SingInContainer>
  );
};

export default SignIn;
