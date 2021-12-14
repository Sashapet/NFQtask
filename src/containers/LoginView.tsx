import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { DefaultButton } from '@components/.';
import { scale } from '@utils/helpers/dimensions';

export const LoginView: React.FC = () => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    onSubmit={values => {
      console.tron.log(values);
    }}
  >
    {({ handleSubmit, values, handleChange }) => (
      <LoginWrapper>
        <LogoWrapper>
          <Logo source={{ uri: 'https://placeimg.com/80/80/tech' }} />
        </LogoWrapper>
        <InputWrapper>
          <Input
            placeholder={'Username'}
            placeholderTextColor={'black'}
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <Input
            placeholder={'Password'}
            placeholderTextColor={'black'}
            value={values.password}
            onChangeText={handleChange('password')}
          />
          <DefaultButton onPress={handleSubmit}>Submit</DefaultButton>
        </InputWrapper>
      </LoginWrapper>
    )}
  </Formik>
);
const LoginWrapper = styled.View`
  flex: 1;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;
const LogoWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
const InputWrapper = styled.View`
  flex: 2;
  width: 100%;
`;
const Input = styled.TextInput`
  height: ${scale(50)}px;
  border: 1px solid black;
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => scale(theme.spacing.s)}px;
`;
const Logo = styled.Image`
  width: ${scale(100)}px;
  height: ${scale(100)}px;
`;
